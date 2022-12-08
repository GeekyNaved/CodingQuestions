// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// NOT WORKING PROPERLY
var a = [1,3,4,1,3];
var i;
var uE = 0;
for(i=0; i<a.length; i++){
    uE = uE ^ a[i];
}
console.log("unique element is ", uE);