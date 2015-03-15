//Function (utilizing recursion) which takes in a parameter (num) and returns the factorial of that number (i.e. num = 3; return 3*2*1)

var factorial = function(num) {
  if (num == 0) {			//Base case, 0 factorial is 1
    return 1;
  }
  else {
    return num * factorial(num-1);	//All subsequent factorials are just that number multipled by the previous numbers factorial
  }
}
