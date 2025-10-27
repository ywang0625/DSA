/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 0){
        throw new Error("x is negative");
    }
    let half = Math.ceil(x/2); 
    
    for(let i = 0; i <= half; i++){
        if((i * i) == x){
            console.log("1: " + i);
            return i;
        }
        else if((i * i) > x){
            console.log("2: " + i);
            return (i-1);
        }
        else if(x == 2){
            return 1;
        }
        else 
            continue;
    }
};