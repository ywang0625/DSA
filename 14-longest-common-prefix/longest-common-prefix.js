/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = strs[0];
    if (strs.length == 0){
        return "";
    }

    for (let i = 1; i < strs.length; i++){
        while (strs[i].indexOf(ans) !== 0){
            ans = ans.slice(0, -1);
            if(!ans)
                return "";
        }
    }

    return ans;
};