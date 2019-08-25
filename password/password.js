"use strict";


$(document).ready(function() {
    let num = $("#num");
    let password = $("#password");

    let getRandomNumber = function (max) {
        let random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };



    $("#generate").click(function() {
        // Variable declaration
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        let tempPassword = "";
        let numLength = parseInt(num.val());

        // Validate input from website
        if (isNaN(numLength)){  // If input is not a number display error message and clear box
            window.alert("Please enter an actual number in the Number of Characters box...");
            num.val("");
            return;
        }

        password.val( "" ); // clear previous entry
        for (let i = 0; i < numLength; i++) {
            tempPassword += chars.charAt(getRandomNumber(chars.length));
        }
        password.val(tempPassword);
        
    }); // end click()
    
    $("#clear").click(function() {
        num.val( "" );
        password.val( "" );
        num.focus();
    }); // end click()
    
    // set focus on initial load
    num.focus();
}); // end ready()