

//Print all even numbers from a user's given start and stop number.


var firstNumber = parseInt(prompt("Enter first number"));
var secNumber = parseInt(prompt("Enter second number"));


    for (var i = firstNumber; i <= secNumber; i++)
    {
        if(i % 2 === 0)
        { console.log(i); }
    }

