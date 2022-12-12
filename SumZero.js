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