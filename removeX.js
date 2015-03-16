//Function (utilizing recursion)  that takes in two parameters, a string and an array to store the outputted string, which returns the original string with all x's removed

var removeX = function(str, newStr) {	//Takes in two parameters: a string, and an empty array
    if (str.length == 0) {		//If str is empty the function is stopped, this is the base case
        return true;
    }
    else if (str[0] !== 'x') {		//If the first letter of str does not contain an x, it is pushed to array newStr, sliced, and the function is called again
        newStr.push(str[0]);
        str = str.slice(1);
        removeX(str, newStr);
    }
    else if (str[0] == 'x') {		//If x is found, it is sliced without being pushed into the new array
        str = str.slice(1);
        removeX(str, newStr);
    }
    return newStr.join('');		//Join method is utilized to combine substrings in the array into one string
}
