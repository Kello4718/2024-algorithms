const array = [1, 2, 4, 6, 8, 10, 9, 3, 5, 7, 59, 35, 25, 64, 11, 34, 22, 15];
let count = 0;

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp
    }

    return array;
}

console.log(selectionSort(array));
console.log('count =', count)