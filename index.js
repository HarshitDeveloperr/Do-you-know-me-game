var readlineSync = require("readline-sync");
var score = 0;
console.log("Do you know me game!");
console.log("\n");

var userName = readlineSync.question("What's your name? ");

console.log("\nWelcome "+ userName + "! Let's See how much you know Harshit?");


function play(question,answer){

   var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("Right!");
    score++;
  }else{
    console.log("Wrong!");
  }

  console.log("Current Score: ",score);
  console.log("------------");
}

var questionOne = {
  question : "Where do I live? ",
  answer: "Delhi"
}


var questionTwo = {
  question : "His fav car? ",
  answer: "Mercedes"
}

var questionThree = {
  question : "His College? ",
  answer: "Ramanujan College"
}

var questions = [questionOne,questionTwo,questionThree];

for(var i=0;i<questions.length;i++){
  console.log("\n");
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("\nYour final Score: "+score);