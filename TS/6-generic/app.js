"use strict";
const obj = {
    a: 1,
    b: 2
};
function swapKeysAndValues(obj) {
    const result = {};
    for (const key in obj) {
        const value = obj[key];
        result[value] = key;
    }
    return result;
}
const res = swapKeysAndValues(obj);
console.log(res);
