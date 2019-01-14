

//Create a program that takes user input.
// If they enter 1, call a function that prints 1.
// If they press 2, call a function that prints 2.
// If they press 3, call a function that prints 3.
// If they enter ‘q’, quit.
// Else, print “ERROR”.
//

var whichNum = parseInt(prompt("Enter 1, 2, 3, or  q"));



    if(whichNum === 1) {
        console.log("1");
    }

    if (whichNum === 2) {
        console.log("2");
    }

    if (whichNum === 3) {
        console.log("3");
    }
    if (whichNum === "q") {
    console.log(" ");
    }

    else
    { console.log("ERROR")}






// Challenge: Ask the user to enter a starting balance.
// Ask the user if they want to make a withdraw or deposit.
// Ask them for the amount to withdraw or deposit, then show the total answer.
// Let the user quit when they enter 'q'.
