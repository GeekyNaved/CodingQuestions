let a = [10, 1, 7, 6, 14, 9];
let i, j;
let n = a.length;
for (i = 0; i < n; i++) {
    for (j = 0; j < n - i; j++) {
        if (a[j] > a[j + 1])
            [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
}

console.log(a);


// BUBBLE SORT
// 1. Match first index with next if first > next index then swap
