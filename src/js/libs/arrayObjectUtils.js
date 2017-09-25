export function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export function sortByKey(myObj) {
    let keys = Object.keys(myObj),i, len = keys.length;

    keys.sort();

    for (i = 0; i < len; i++) {
      let k = keys[i];
      console.log(k + ':' + myObj[k]);
    }

}