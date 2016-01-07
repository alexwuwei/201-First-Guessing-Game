var userName = prompt("what is your name?");
var counter = 0;
//alert ("Hi there, " + userName + ". You will be asked 4 questions today (3 of them about this developer). Please answer 'Y' for yes and 'N' for No");
console.log("the user's name is " + userName);

//First question block

function firstQuestion(){
  var res1 = document.getElementById('firstAnswer');
  var questionOne = prompt("is my name Hugo?");
  questionOne = questionOne.toUpperCase();
  console.log(userName + " answered the question with " + questionOne);
     if (questionOne === 'Y' || questionOne === 'YES') {
       res1.textContent = ("you are right, " + userName + "! For the record, your answer was " + questionOne);
       counter += 1;  //counts right answer
       console.log(userName + " has answered " + counter + " questions correctly");
   } else {
     res1.textContent = ("you are wrong, " + userName + " but that's ok! For the record, your answer was " + questionOne);
   }

}
function secondQuestion(){
  var res2 = document.getElementById('secondAnswer');
  //Second question block
   var questionTwo = prompt("am I a llama?");
   questionTwo = questionTwo.toUpperCase();
   console.log(userName +" answered the question with " + questionTwo);
   if (questionTwo === 'N' || questionTwo === 'NO') {
     res2.textContent = ("you are right, " + userName + "! For the record, your answer was " + questionTwo);
     counter += 1; //counts right answer
     console.log(userName + " has answered " + counter + " questions correctly");
  } else {
   res2.textContent = ("you are wrong, " + userName + " but that's ok! For the record, your answer was " + questionTwo);
  }

}
function thirdQuestion(){
  var res3 = document.getElementById('thirdAnswer');
  //Third question block
    var questionThree = prompt("Do I like coding?");
    questionThree = questionThree.toUpperCase();
    console.log(userName + " answered the question with " + questionThree);
    if (questionThree === 'Y' || questionThree === 'YES') {
      res3.textContent = ("you are right, " + userName + "! For the record, your answer was " + questionThree);
      counter += 1; //counts right answer
      console.log(userName + " has answered " + counter + " questions correctly");
  } else {
    res3.textContent = ("you are wrong, " + userName + " but that's ok! For the record, your answer was " + questionThree);
  }

}

function fourthQuestion(){
  var res4 = document.getElementById('fourthAnswer');
  //Number question block
  var bonusQuestion = prompt("Now for something completely different: I'm thinking of a number between 1 and 10. Guess as many times as you need until you get it right. Afterwards, I'll tell you how many times you failed miserably before getting it right (no pressure)");
  console.log(userName +" answered the question with " + bonusQuestion);
  var numberQuestionWrongCounter = 0;
  while (bonusQuestion != 6) {
    numberQuestionWrongCounter += 1;
    res4.textContent = ("Wrong. So, so wrong. You've guessed " + numberQuestionWrongCounter + " times so far. Please take this more seriously and try again");
    bonusQuestion = prompt("So once again, what number am I thinking of? (between 1 and 10)");
  }
  res4.textContent = ("You got it right, " + userName + "! Just so you know, it took you " + numberQuestionWrongCounter + " tries to get it right. So yeah, think about that for a while and feel bad.");
  counter++;
}


function fifthQuestion(){
  var answers = ['pizza', 'burritos', 'kung pao chicken', 'tomatoes', 'food', 'tacos'];
  var res5 = document.getElementById('fifthAnswer');
  var guess = prompt('What are my favorite foods?').toLowerCase();

  console.log(guess);
  for (i = 0; i < answers.length; i++) {
    console.log(i);
    if ( guess === answers[i] ){
      res5.textContent = ('You guessed correctly! I love ' + guess + '.');
      counter++;
      break;
    } else {
      res5.textContent = ('You suck. I hate ' + guess + '.');
    };
  }
}




firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();

res6 = document.getElementById('rightAnswers');
res6.textContent = ('You answered ' + counter + ' questions correctly!');
