/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var trimmed = s.trim();
    var ans = 0;

    for(let i = (trimmed.length - 1); i >= 0; i--){
        if(trimmed[i] != " "){
            ans++;
        }   
        else
            break;
    }

    return ans;
};