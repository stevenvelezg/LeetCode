/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var numArray = x.toString();
    
    for (var i = 0; i < numArray.length; i++){
        if (numArray[i] !== numArray[numArray.length-i-1]){
            return false;
        }
    }
    return true;
};