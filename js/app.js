//This is the guessing game for the users//
'use-strict';

var userName = prompt('Thank you for visiting my page. \n\n Please enter your name to start the game');
console.log('Username: ', userName);

alert('Hello ' + userName + '! \n\n Let\'s start the game!');

var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;

var respwork = prompt('I work in Amazon. Yes or No? ');
console.log('Work in Amazon ?' , respwork);

    if(respwork.toUpperCase() === 'Y' || respwork.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Yes, That is correct");
    }
    else if(respwork.toUpperCase() === 'N' || respwork.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("No, I work in Amazon");
    }

var homeresp = prompt('I live in Redmond. Yes or No? ');
console.log('Live in Redmond ?' , homeresp);
    
    if(homeresp.toUpperCase() === 'Y' || homeresp.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Yes, That is correct");
    }
    else if(homeresp.toUpperCase() === 'N' || homeresp.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("No...I live in Redmond");
    }


var respdb = prompt('I know DynamoDB. Yes or No? ');
console.log('know DynamoDB?' , respdb);
    
    if(respdb.toUpperCase() === 'Y' || respdb.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Yes, That is correct");
    }
    else if(respdb.toUpperCase() === 'N' || respdb.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("No...I know DynamoDB");
    }

console.log("correctAnswersCounter:", correctAnswersCounter);
console.log("incorrectAnswersCounter:", incorrectAnswersCounter);

alert('You have answered  ' + correctAnswersCounter + ' questions correctly and ' + incorrectAnswersCounter +' questions incorrectly.');