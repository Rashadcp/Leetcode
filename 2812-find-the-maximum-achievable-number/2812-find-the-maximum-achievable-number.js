/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    let ans = num;
    for(let i=1; i<=t; i++){
        ans += 2;
    }
    return ans;
};