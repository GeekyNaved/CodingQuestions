var a = [1,2,3,4,5,6,8];
var i = 0;
while(i < a.length ){
    if(i+1 > a.length){
        [a[i], a[i+1]] = [a[i+1], a[i]];
    }
    i = i+2;
}
 console.log(a);