function filterArray(numbers, removeFunction) {
    const filteredNumbers = [];
    for (const number of numbers) {
        if (!removeFunction(number)) { 
            filteredNumbers.push(number);
        }
    }
    return filteredNumbers;
}

function removeNum(number) {
    return number > 5; 
}


const numbers = [10, 42, 3, 4, 5, 6];
const filtered = filterArray(numbers, removeNum);
console.log(filtered); 

