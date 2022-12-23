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


// Binary Search - steps

// 1. Find mid element using mid = s + (e -s)/2
// 2. Run loop (start <= end)
// 3. Inside loop: compare mid and key if true return mid else proceed to next step
// 4. if key > arr[mid] then go to right side by s= mid + 1;
// 5. else go to left part by end = mid -1;
// 6. then update mid = s + (e - s)/2;
// 7. after loop end return -1;

// Time complexity for this algo is O(log n) (worst case)