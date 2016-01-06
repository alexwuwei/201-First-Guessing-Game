var userName = prompt("what is your name?");
alert ("Hi there, " + userName + ". You will be asked 4 questions today (3 of them about this developer). Please answer 'Y' for yes and 'N' for No");
console.log("the user's name is " + userName);

var questionOne = prompt("is my name Hugo?");
console.log(userName + " answered the question with " + questionOne);
   if (questionOne === 'Y') {
     alert ("you are right, " + userName + "! For the record, your answer was " + questionOne);
 } else {
   alert ("you are wrong, " + userName + " but that's ok! For the record, your answer was " + questionOne);
 }

 var questionTwo = prompt("am I a llama?");
 console.log(userName +" answered the question with " + questionTwo);
 if (questionTwo === 'N') {
   alert ("you are right, " + userName + "! For the record, your answer was " + questionTwo);
} else {
 alert ("you are wrong, " + userName + " but that's ok! For the record, your answer was " + questionTwo);
}

  var questionThree = prompt("Do I like coding?");
  console.log(userName + " answered the question with " + questionThree);
  if (questionThree === 'Y') {
    alert ("you are right, " + userName + "! For the record, your answer was " + questionThree);
} else {
  alert ("you are wrong, " + userName + " but that's ok! For the record, your answer was " + questionThree);
}

   var bonusQuestion = prompt("I'm thinking of a number. Give me a number, and I will tell you if it's above or below mine");
   console.log(userName +" answered the question with " + bonusQuestion);
     if (bonusQuestion > 17) {
       alert(userName + ", your number is too high");
     } else {
       alert(userName + ", your number is too low");
     }
