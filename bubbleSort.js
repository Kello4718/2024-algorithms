const array = [1, 2, 4, 6, 8, 10, 9, 3, 5, 7, 59, 35, 25, 64, 11, 34, 22, 15];
let count = 0;

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }

    return array
}

console.log(bubbleSort(array));
console.log('count =', count)