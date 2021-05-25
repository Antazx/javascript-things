let list = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9];
let duplicates = {};

for (let index = 0; index < list.length; index++) {
    let currentItem = list[index];
    duplicates[currentItem] ? duplicates[currentItem].push(index) : duplicates[currentItem] = [index]; 
}

let valuesList = Object.values(duplicates);
let duplicatedIndexes = valuesList.filter((value) => value.length > 1);
console.log(duplicatedIndexes.flat());