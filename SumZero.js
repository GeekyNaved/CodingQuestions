// sum zero problem : get pairs of elements whose sum is zero
let a = [-5,-4,-3,-2,0,2,4,6,8];
let n1,n2;
let sum;
let pair = [];
for(let i=0; i<a.length; i++){
 for(let j=1; j< a.length; j++){
    sum = a[i] + a[j];
    // console.log(a[i],a[j], a[i] + a[j])
    if(sum == 0){
      pair.push(a[i],a[j]);
      n1 = a[i];
      n2 = a[j];
    // break;
    }  
    // if(sum === 0) break;
 }
}
// console.log("------------------------")
console.log(pair)
console.log(n1,n2)



// Clean code 

let arr = [-5,-4,-3,-2,0,2,4,6,8];

function getSumZeroPair(arr) {
for(let i = 0; i< arr.length; i++) {
  for(let j = i+1; j< arr.length; j++) {
    if(a[rri] + arr[j] == 0) {
      return [arr[i], arr[j]];
    }
  }
}
}
console.log(getSumZeroPair(arr))


// optimized solution - Time Complexity - O(n)

let ar = [-5,-4,-3,-2,0,2,4,6,8];
let first = 0, last = a.length -1;
function getSumZeroPair (a,first,last) {
while(first < last) {
    sum = a[first] + a[last];
    if(sum == 0){
        return [a[first], a[last]];
    } else if(sum > 0){
        last--;
    } else {
        first++;
    }
}
}

console.log(getSumZeroPair(ar,first,last))