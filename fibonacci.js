//Function that utilizes recursion to output a number in the fibonacci sequence given sequence number
//Fibonacci sequence assumes first digit is 0

var fibonacci = function(num) {
    if(num==1) {					//Base case, first two digits must be identified, 1st in sequence is 0
        return 0;
    }
    else if (num==2) {					//Second in sequence is 1
        return 1;
    }
    else {
        return fibonacci(num-1) + fibonacci(num-2);	//Every subsequent number in sequence is the sum of the prior fibonacci..
    }							//...sequence number (fibonacci(num-1)) and the penultimate (fibonacci(num-2))
}
