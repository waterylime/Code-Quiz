
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer, quizCountDown) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.quizCountDown =quizCountDown;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    // quiz.quizCountDown= 10;
     

    if(quiz.isEnded()) {

        showScores();
    }
    else {
        // show question
        Question.quizCountDown = 120;
        Question.quizCountDown--;
        timer = setInterval(Question.quizCountDown, 1000)
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        let quizText= document.getElementById('timer')
        quizText.innerHTML = timer;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Which of the following best describes what a fuction in JavsaScript is used for?", ["A function allows for the use of mathematical operators." , "A function stores data." , "A function is a reusable piece of code that can accept input and performs a specific task." , "A function creates new variables."], "A function is a reusable piece of code that can accept input and performs a specific task.",120),
    new Question("Which correctly represents the most condensed form of the function?", ["const areaOfCircle = radius => Math.PI * radius * radius;" , "const areaOfCircle = radius => return Math.PI * radius 8 radius;" , "const areaOfCircle = radius => { Math.PI * radius * radius};" , "const areaOfCircle = radius => { return Math.PI * radius * radius};"],"const areaOfCircle = radius => Math.PI * radius * radius;",120),
    new Question("What’s the purpose of a parameter?", ["To specify actual values to a function." , "To allow a function to accept data." , "To call a function." , "Red Panda"],"To allow a function to accept data.",120),
    new Question("What is the correct way to call the random method on the Math global object?",["Math.random()" , "random.Math()" , "math.random()" , "Math.(random)"], "Math.random()",120),
    new Question("What is string interpolation?" , [ "Printing a string to the console.", "Joining multiple strings together using operators like +", "Changing the value of a variable." , " Using template literals to embed variables into strings."], "Using template literals to embed variables into strings.",120),
    new Question("Which of the following code snippets would cause an error?", [ "let food = ‘chicken’; food = ‘sushi’;" , " const foodOne = ‘chicken’; const foodTwo = ‘sushi’;" ,"const food = ‘chicken’; food = ‘sushi’;" , " let food = ‘chicken’; let drink =’seltzer’;"], "const food = ‘chicken’; food = ‘sushi’;",120)
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();


//timer

