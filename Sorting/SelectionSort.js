// SELECTION SORT

let arr = [4,3,2,1, 6, 8, 5];
let size = arr.length;
SelectionSort(arr, size);
let result = SelectionSort(arr, size);
console.log(result);

function SelectionSort (a, size){
    for(let i= 0 ; i < size-1 ; i++) {
        let minIndex=i;
        for(let j = i+1; j < size ; j++) {
            if(a[j] < a[minIndex]){
                minIndex = j;
            }
        }
        // swapping both using [a,b] = [b,a]
        [a[minIndex], a[i]] = [a[i], a[minIndex]];
    }
    return a;
}



