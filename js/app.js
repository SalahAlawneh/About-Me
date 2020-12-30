"use strict";
var userName = prompt('what is your name?');
alert('hello ' + userName + ' i am glad to be my guest');
var mark = 0;


var questionOne = prompt('Do you think i like University learning approch?');

switch (questionOne.toLocaleLowerCase()) {
    case "yes":
    case "y":
        // console.log('Actually no I dont like university approach');
        alert('Actually no I dont like university approach');
        break;
    case "no":
    case "n":
        // console.log('You are right I dont like university approach');
        alert('You are right I dont like university approach');
        mark++;
}


var questionTwo = prompt('Do you think that i like watching football?');

switch (questionTwo.toLocaleLowerCase()) {
    case "yes":
    case "y":
        //console.log('No, I dont watch football');
        alert('No, I dont watch football');
        break;
    case "no":
    case "n":
        //console.log('yes, I dont watch football');
        alert('yes, I dont watch football');
        mark++;
}


var questionThree = prompt('Am i studied computer science in the University?');

switch (questionThree.toLocaleLowerCase()) {
    case "yes":
    case "y":
        //console.log('No, I studied mechanical engineering');
        alert('No, I studied mechanical engineering');
        break;
    case "no":
    case "n":
        //console.log('Yes, you are right I studied mechanical engineering');
        alert('Yes, you are right I studied mechanical engineering');
        mark++;
}


var questionFour = prompt('Is my English language is good?');

switch (questionFour.toLocaleLowerCase()) {
    case "yes":
    case "y":
        //console.log('I think my english its good yes');
        alert('I think my english its good yes');
        mark++;
        break;
    case "no":
    case "n":
        //console.log('sorry man but i think my english is good');
        alert('sorry man but i think my english is good');
}


var questionFive = prompt('Could i fix my car without a mechanic technician?');

switch (questionFive.toLocaleLowerCase()) {
    case "yes":
    case "y":
        //console.log('no, i cant fix cars');
        alert('no, i cant fix cars');
        break;
    case "no":
    case "n":
        //console.log('yes, i will send my car to crage');
        alert('yes, i will send my car to crage');
        mark++;
}

alert('thank you ' + userName + ' now you know me');


var guessingTryAttempt = 0;
var guessingTryAllow = 4;
var i = 0;

// console.log( gussedNumber);
while ((guessingTryAttempt < guessingTryAllow) && (i !== 1)) {
    guessingTryAttempt++;
    var x = prompt('guess a number between 1 and 10, be careful you have just 4 attempt');
    var gussedNumber = parseInt(x);

    if (gussedNumber !== 5) {
        // console.log('not yet, you are too close');
        alert('not yet, you are too close');
    }
    if (gussedNumber == 5) {
        console.log('did it, you are my man');
        alert('did it, you are my man');
        i++;
        mark++;
        // console.log(i);
    }
}


var myFavFood = ['mansaf', 'pizza', 'msakkan', 'shawerma'];
var guessingTryAttempt2 = 0;
var guessingTryAllow2 = 6;
var j = 0;

do {
    var questionSeven = prompt('whats my favourit food -you could try 6 times-?');
    // console.log( typeof questionSeven);
    // console.log(typeof questionSeven);
    // console.log(typeof myFavFood);
    guessingTryAttempt2++;
    if (questionSeven.toLowerCase() === myFavFood[0] || questionSeven.toLowerCase() === myFavFood[1] || questionSeven.toLowerCase() === myFavFood[2] || questionSeven.toLowerCase() === myFavFood[3]) {
        alert('yes this is my favourit food');
        j++;
        mark++;
    }
}

while ((guessingTryAttempt2 < guessingTryAllow2) && (j != 1));

alert('actually my favourite foods are mansaf,shawerma,Pizza and msakkan')


alert('your mark is (' + mark + ' from 7) ,you are amazing');
