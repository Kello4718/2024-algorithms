const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length - 1;
    let middle;
    let isFound = false;
    let position = -1;
    while (isFound === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item) {
            isFound = true;
            position = item;
            return position;
        }

        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }

    return position;
}

console.log(binarySearch(array, 10));
console.log('count =', count);