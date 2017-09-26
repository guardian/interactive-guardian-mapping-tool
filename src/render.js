import Handlebars from 'handlebars/dist/handlebars'
import rp from 'request-promise'
import mainTemplate from './src/templates/main.html!text'
import cardStackTemplate from './src/templates/cardStack.html!text'
import cardTemplate from './src/templates/card.html!text'

const altKey = '1uCh5_YF7uPgLuuaFbPL_ZSW7HfGlox1DbUhkumf22OQ';

export async function render() {
	 return rp({
        uri: 'https://interactive.guim.co.uk/docsdata/'+altKey+'.json',
        json: true
    }).then((data) => {    

    	let d = formatData(data);
        
        let html = compileHTML(d);

        return html;
    });
   
}

function formatData(data) {
    var newObj = {};
    let count = 0;

    let headGroup  = data.sheets.headerCopy;
    
    data.sheets.Sheet1.map((obj,k) => {
    	obj.ref = k;
    })

    let groups = groupBy(data.sheets.Sheet1, 'card-group');

    groups = sortByKeys(groups);

    groups.map((obj, k) => {
    	obj.groupRef = k;
        obj.objArr.map((ob) => {
        	ob.groupRef = obj.groupRef;
        })

        headGroup.map((headOb) => {
            if(headOb['card-group'] == obj.sortOn )  {
                obj.Header = headOb.Header;
                obj.Standfirst = headOb.Standfirst;
            }  
        })


    });
    
    newObj.groups = groups;

    return newObj;
}



function compileHTML(dataIn) {
    Handlebars.registerHelper('html_decoder', function(text) {
        var str = unescape(text).replace(/&amp;/g, '&');
        return str;
    });

    Handlebars.registerPartial({
    	'cardstack': cardStackTemplate,
        'card': cardTemplate
    });

    var content = Handlebars.compile(
        mainTemplate, {
            compat: true
        }
    );

    var newHTML = content(dataIn);

    return newHTML

}


function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

// function sortByKey(myObj) {
//     let keys = Object.keys(myObj),i, len = keys.length;

//     keys.sort();

//     for (i = 0; i < len; i++) {
//       let k = keys[i];
//       console.log(k + ':' + myObj[k]);
//     }

// }

function sortByKeys(obj) {
    let keys = Object.keys(obj), i, len = keys.length;

    keys.sort();

    var a = []

    for (i = 0; i < len; i++) {
        let k = keys[i];
        let t = {}
        t.sortOn = k;
        t.objArr = obj[k]
        a.push(t);
    }

    return a;
}


