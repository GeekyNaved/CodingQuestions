let evenArr = [2, 4, 6, 8, 10, 12, 14, 16, 18];
let size = evenArr.length;
let key = 4;
BinarySearch(evenArr, size, key);
let index = BinarySearch(evenArr, size, key);
index != -1 ? console.log(key, "exists at index ", index) :
    console.log('key does not exist');
function BinarySearch(arr, size, key) {
    let start = 0;
    let end = size - 1;

    // find mid 
    let mid = Math.floor(start + (end - start) / 2)

    while (start <= end) {
        if (arr[mid] == key) {
            return mid;
        }
        if (key > arr[mid]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
        mid = Math.floor(start + (end - start) / 2);
    }
    return -1;
}