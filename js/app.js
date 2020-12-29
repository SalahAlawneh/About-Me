"use strict";
var userName = prompt('what is your name?');
alert ('hello '+userName+' i am glad to be my guest');
var questionOne = prompt('Do you think i like University learning approch?');
var questionTwo = prompt('Do you think that i like watching football?');
var questionThree = prompt('Am i studied computer science in the University? ');
var questionFour = prompt('Is my English language is good?');
var questionFive = prompt('Could i fix my car without a mechanic technician?');

switch (questionOne.toLocaleLowerCase()){
    case 'y'||'yes':
    // console.log('Actually no I dont like university approach');
        alert ('Actually no I dont like university approach');
        break;
    case 'n'||'no':
        // console.log('You are right I dont like university approach');
        alert ('You are right I dont like university approach');
        break;

}
switch (questionTwo.toLocaleLowerCase()){
    case 'y'||'yes':
        // console.log('No, I dont watch football');
        alert ('No, I dont watch football');
    break;
    case 'n'||'no':
        // console.log('yes, I dont watch football');
        alert ('yes, I dont watch football');
    break;
}

switch (questionThree.toLocaleLowerCase()){
    case 'y'||'yes':
        // console.log('No, I studied mechanical engineering');
        alert ('No, I studied mechanical engineering');
    break;
    case 'n'||'no':
        // console.log('Yes, you are right I studied mechanical engineering');
        alert ('Yes, you are right I studied mechanical engineering');
    break;
}

switch (questionFour.toLocaleLowerCase()){
    case 'y'||'yes':
        // console.log('I think my english its good yes');
        alert ('I think my english its good yes');
    break;
    case 'n'||'no':
        // console.log('sorry man but i think my english is good');
        alert ('sorry man but i think my english is good');
    break;
}

switch (questionFive.toLocaleLowerCase()){
    case 'y'||'yes':
        // console.log('no, i cant fix cars');
        alert ('no, i cant fix cars');
    break;
    case 'n'||'no':
            // console.log('yes, i will send my car to crage');
            alert ('yes, i will send my car to crage');
    break;            
}

alert ('thank you '+userName+' lets start know each other');














