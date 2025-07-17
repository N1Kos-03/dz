"use strict";
let a = { a: 5, b: '' };
let b = { a: 10, c: true };
let v0 = difference(a, b);
function difference(a, b) {
    const result = {};
    for (const key in a) {
        if (!(key in b)) {
            result[key] = a[key];
        }
    }
    return result;
}
console.log(v0);
