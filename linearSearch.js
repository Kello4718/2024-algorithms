const array = [1, 2, 4, 6, 8, 10, 9, 3, 5, 7];
let count = 0;

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count++;
        if (array[i] === item) {
            return array[i];
        }
    }

    return null
}

console.log(linearSearch(array, 1));
console.log('count =', count)