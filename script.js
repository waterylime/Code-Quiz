let questions = [
{
    title: "Which of the following best describes waht a fuction in JavsaScript is used for?",
    choices:["A function allows for the use of mathematical operators." , "A function stores data." , "A function is a reusable piece of code that can accept input and performs a specific task." , "A function creates new variables."],
    answer: "A function is a reusable piece of code that can accept input and performs a specific task."
},
{
    title : "Which correctly represents the most condensed form of the function?",
    choices:["const areaOfCircle = radius => Math.PI * radius * radius;" , "const areaOfCircle = radius => return Math.PI * radius 8 radius;" , "const areaOfCircle = radius => { Math.PI * radius * radius};" , "const areaOfCircle = radius => { return Math.PI * radius * radius};"],
    answer: "const areaOfCircle = radius => Math.PI * radius * radius;"
},
{
    title: "What’s the purpose of a parameter?", 
    choices:["To specify actual values to a function." , "To allow a function to accept data." , "To call a function." , "Red Panda"],
    answer:"To allow a function to accept data."
},
{
    title:"What is the correct way to call the random method on the Math global object?",
    choices:["Math.random()" , "random.Math()" , "math.random()" , "Math.(random)"],
    answer:"Math.random()" 
},
{
    title: "What is string interpolation?" ,
    choices : [ "Printing a string to the console.", "Joining multiple strings together using operators like +", "Changing the value of a variable." , " Using template literals to embed variables into strings."],
    answer: "Using template literals to embed variables into strings."
},
{
    title:"Which of the following code snippets would cause an error?",
    choices: [ "let food = ‘chicken’; food = ‘sushi’;" , " const foodOne = ‘chicken’; const foodTwo = ‘sushi’;" ,"const food = ‘chicken’; food = ‘sushi’;" , " let food = ‘chicken’; let drink =’seltzer’;"],
    answer :"const food = ‘chicken’; food = ‘sushi’;"
}

];

let myQuiz = new Quiz(questions);

populate = () =>{
    if (myQuiz.isEnded ()) {
        showScores();
    }
    else {

        // show question
        let element = document.getElementsByClassName('question');
        element.innerHTML = myQuiz.getQuestionIndex().text;

        //show choices

        let choices = questions[myQuiz.getQuestionIndex()].choices;
        console.log(choices)
        for(var i = 0; i < choices.length; i++) {
            console.log(choices[i])

            let element = document.getElementsByClassName ('choice' + i)
            element.innerHTML = choices[i];
            console.log(i)
            guess('btn' + i, choices[i]);
        };

        showProgress = () =>{
            let currentQuestionNumber = myQuiz.getQuestionIndex +1;
            let element = document.getElementsByClassName('progress');
            element.innerHTML = 'question' +currentQuestionNumber + "of" + myQuiz.question.lenght;

        };
    };
};


guess = (id, guess) =>{
    console.log(id)
    let button = document.getElementById(id);
    button.onclick = function () {
        myQuiz.guess(guess);
        populate ();
    };
};




showscores = () =>{
    let gameOverHtml = '<h1>Result</h1>';
    gameOverHtml += "<h2 class='score'> 'Your scores' + myQuiz.score + </h2>";
    let element = document.getElementsById('myQuiz');
    element.innerHTML = gameOverHtml;
};





populate();

