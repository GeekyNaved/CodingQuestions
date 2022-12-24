// First Largest element in array
let a = [22,34,16,80];
let largest = 0;
for(let i = 0; i< a.length; i++){
 if(a[i] > largest){
     largest = a[i];
 }
}
console.log(largest)

// Time Complexity O(n);