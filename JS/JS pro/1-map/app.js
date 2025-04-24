const obj = [
    {id:1, name:"Вася"},
    {id:2, name:"Петя"},
    {id:1, name:"Вася"},
]

let uniqueObj = [...new Map(obj.map(item => [item.id, item])).values()];
console.log(uniqueObj);