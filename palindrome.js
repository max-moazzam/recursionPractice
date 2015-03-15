//Function (utilizing recursion) which takes in a string parameter (str) and returns true if the string is a palindrome

var palindrome = function(str) {
    if (str.length == 0) {				//Base case, if a string is empty it is a palindrome (nothing forward is the same as nothing backwards)
        return true;
    }
    else if (str[0] == str[str.length-1]) {		//Checks to see if the first letter matches the last
        return palindrome(str.slice(1, str.length-1));	//If so then letters are sliced and entered in the function again to check the next set of letters
    }
    return false;					//If letters do not match before string becomes empty, then false is returned
}
