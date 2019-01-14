

//Ask the user to create two variables.
// Create a function that takes two variables
// and returns the largest of the two numbers.




var smallNum = parseInt(prompt("Enter first number"));
var bigNum = parseInt(prompt("Enter second number"));

function printBig()
{
    if (smallNum > bigNum)
    {
        return smallNum;
    }

    if (bigNum > smallNum)
    {
        return bigNum;
    }
}

console.log(printBig());