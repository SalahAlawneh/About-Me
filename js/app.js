"use strict";
var userName = prompt('what is your name?');
alert ('hello '+userName+' i am glad to be my guest');

var g=0; // this one for marking the seventh quesiton


var questionOne = prompt('Do you think i like University learning approch?');

switch (questionOne.toLocaleLowerCase()) {
    case "yes":
        console.log('Actually no I dont like university approach');
        alert ('Actually no I dont like university approach');
    break;
    case "y":  
        console.log('Actually no I dont like university approach');
        alert ('Actually no I dont like university approach');        
    break;
    case "no":
        console.log('You are right I dont like university approach');
        alert ('You are right I dont like university approach');
    break;
    case "n":
console.log('You are right I dont like university approach');
alert ('You are right I dont like university approach');
}


var questionTwo = prompt('Do you think that i like watching football?');

switch (questionTwo.toLocaleLowerCase()){
    case "yes":
        //console.log('No, I dont watch football');
        alert ('No, I dont watch football');
    break;
    case "y":  
        //console.log('No, I dont watch football');
        alert ('No, I dont watch football');
    break;
    case "no":
        //console.log('yes, I dont watch football');
        alert ('yes, I dont watch football');
    break;
    case "n":
        //console.log('yes, I dont watch football');
        alert ('yes, I dont watch football');
}


var questionThree = prompt('Am i studied computer science in the University?');

switch (questionThree.toLocaleLowerCase()){
    case "yes":
        //console.log('No, I studied mechanical engineering');
        alert ('No, I studied mechanical engineering');
    break;
    case "y":  
        //console.log('No, I studied mechanical engineering');
        alert ('No, I studied mechanical engineering');
    break;
    case "no":
        //console.log('Yes, you are right I studied mechanical engineering');
        alert ('Yes, you are right I studied mechanical engineering');
    break;
    case "n":
            //console.log('Yes, you are right I studied mechanical engineering');
            alert ('Yes, you are right I studied mechanical engineering');    
}


var questionFour = prompt('Is my English language is good?');

switch (questionFour.toLocaleLowerCase()){
    case "yes":
        //console.log('I think my english its good yes');
        alert ('I think my english its good yes');
    break;
    case "y":  
        //console.log('I think my english its good yes');
        alert ('I think my english its good yes');
    break;
    case "no":
        //console.log('sorry man but i think my english is good');
        alert ('sorry man but i think my english is good');
    break;
    case "n":
        //console.log('sorry man but i think my english is good');
        alert ('sorry man but i think my english is good');
}


var questionFive = prompt('Could i fix my car without a mechanic technician?');

switch (questionFive.toLocaleLowerCase()){
    case "yes":
        //console.log('no, i cant fix cars');
        alert ('no, i cant fix cars');
    break;
    case "y":
        //console.log('no, i cant fix cars');
        alert ('no, i cant fix cars');
    break;    
    case "no":
        //console.log('yes, i will send my car to crage');
        alert ('yes, i will send my car to crage');
    break;    
    case "n":
        //console.log('yes, i will send my car to crage');
        alert ('yes, i will send my car to crage');    
}

alert ('thank you '+userName+' lets start know each other');


var guessingTryAttempt = 0;
var guessingTryAllow = 4;
var i = 0;

// console.log( gussedNumber);
while ( (guessingTryAttempt < guessingTryAllow) && (i!==1)) {
    guessingTryAttempt++;
    var x = prompt('guess a number between 1 and 10, be careful you have just 4 attempt');
    var gussedNumber = parseInt(x);

    if ( gussedNumber !==5 ) {
        // console.log('not yet, you are too close');
        alert('not yet, you are too close');
    }
    if ( gussedNumber==5  ) {
        console.log('did it, you are my man');
        alert('did it, you are my man');
        i++;
        // console.log(i);

    }
}
var myFavFood = ['mansaf','pizza','msakkan','shawerma'];
var guessingTryAttempt2 = 0;
var guessingTryAllow2 = 6;
var j = 0;

do {
    var questionSeven = prompt('whats my favourit food?');
    // console.log( typeof questionSeven);
    // console.log(typeof questionSeven);
    // console.log(typeof myFavFood);
    guessingTryAttempt2++;
    if (questionSeven.toLowerCase() === (myFavFood[0] ||myFavFood[1] || myFavFood[2] || myFavFood[3])){
        alert('yes this is my favourit food'); 
        j++;
        g=1;      
    }
}

while ((guessingTryAttempt2 < guessingTryAllow2) && (j!=1));

alert('actually my favourite foods are mansaf,shawerma,Pizza and msakkan')

var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;

// question one mark
if (questionOne.toLocaleLowerCase() == 'n') {
    a=1
}
if (questionOne.toLocaleLowerCase() == 'no') {
    a=1
}
console.log(questionOne.toLocaleLowerCase());
console.log(a);

// question two mark
if (questionTwo.toLocaleLowerCase() == 'n') {
    b=1;
}
if (questionTwo.toLocaleLowerCase() == 'no') {
    b=1;
}

// question three mark
if (questionThree.toLocaleLowerCase() == 'n') {
    c=1;
}
if (questionThree.toLocaleLowerCase() == 'no') {
    c=1;
}

// question four mark
if (questionFour.toLocaleLowerCase() == 'y') {
    d=1;
}
if (questionFour.toLocaleLowerCase() == 'yes') {
    d=1;
}

// question five mark
if (questionFive.toLocaleLowerCase() == 'n') {
    e=1;
}
if (questionFive.toLocaleLowerCase() == 'no') {
    e=1;
}

// question six mark
if (gussedNumber ==5 ) {
    f=1;
}
if (questionOne.toLocaleLowerCase() == 'no') {
    f=1;
}

// question seven mark it's in quesion seven code

var mark= a+b+c+d+e+f+g;
alert ('your mark is '+mark+' you are amazing');