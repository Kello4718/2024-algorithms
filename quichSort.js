const array = [1, 2, 4, 6, 8, 10, 9, 3, 5, 7, 59, 35, 25, 64, 11, 34, 22, 15];
let count = 0;

const quichSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1

        if (i === pivotIndex) {
            continue;
        }

        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }

    return [...quichSort(less), pivot, ...quichSort(greater)];
}

console.log(quichSort(array));
console.log('count =', count)