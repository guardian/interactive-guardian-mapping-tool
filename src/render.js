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



        //var maxSteps = sheets.Floors.length;

        // sheets.Floors.map((obj,k)=>{
        //     obj.maxSteps = maxSteps; //aded maxSteps ref for app.js

        //     if(obj.Victims_status){
        //         obj.hasVictims = true;
        //     }else{
        //         obj.hasVictims = false;
        //     }

        //     if(obj.Time_standfirst){
        //         obj.hasTimeCopy = true;
        //     }else{
        //         obj.hasTimeCopy = false;
        //     }

        //     if(obj.Summary){
        //         obj.hasSummary = true;
        //     }else{
        //         obj.hasSummary = false;
        //     }

        // })

        // var hbMainTemplate = Handlebars.compile(mainTemplate);
        // var compiled = hbMainTemplate(sheets);
        // var html = compiled;
        //return html;

        return html;
    });
   
}

function formatData(data) {
    var newObj = {};

    // dataIn.map((obj) => {
    //     if (!obj.floor) { obj.floor = "unknown"; }
    //     if (!obj.age) { obj.age = "unknown"; }
    //     if (!obj.status) { obj.status = "unknown"; }

    //     obj.formatName = obj.name.split(",")[0];
    //     obj.sortName = obj.family_name + obj.formatName;
    // })

    let groups = groupBy(data.sheets.Sheet1, 'card-group');

    groups = sortByKeys(groups);

    groups.map((obj) => {
        console.log(obj)

        // obj.count = obj.objArr.length;
    });

    newObj.groups = groups;

    return newObj;
}



function compileHTML(dataIn) {

	console.log(dataIn)

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


