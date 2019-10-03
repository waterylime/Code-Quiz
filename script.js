populate = () =>{
    if (quiz.isEnded ()) {
        showScores();
    }
    else {

        // show question
        let element = document.getElementsByClassName('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices

        let choices = quiz.getQuestionIndex().choices;
        for( i = 0; i < choices.lenght; i++); {
            let element = document.getElementsByClassName ('choice' + i)
            element.innerHTML = choices [i];
            guess('btn' + i, choicdes [i]);
        };

        showProgress = () =>{
            let currentQuestionNumber = quiz.getQuestionIndex +1;
            let element = document.getElementsByClassName('progress');
            element.innerHTML = 'question' +currentQuestionNumber + "of" + quiz.question.lenght;

        };
    };
};


guess = id, guess =>{
    let button = document.getElementById(id);
    let button.onclick = function () {
        quiz.guess(guess);
        populate ();
    };
};




showscores = () =>{
    let gameOverHtml = '<h1>Result</h1>';
    gameOverHtml += "<h2 class='score'> 'Your scores' + quiz.score + </h2>";
    let element = document.getElementsById('quiz');
    element.innerHTML = gameOverHtml;
};


let questions = [

new questions ['Which of the following best describes waht a fuction in JavsaScript is used for?'['A function allows for the use of mathematical operators.' , 'A function stores data.', 'A function is a reusable piece of code that can accept input and performs a specific task.' , 'A function creates new variables.'], 'A function is a reusable piece of code that can accept input and performs a specific task.'],

new question ['Which correctly represents the most condensed form of the function? Recall that this syntax is also know as ‘concise body.’’[ ‘const areaOfCircle = radius => Math.PI * radius * radius;’ , ‘const areaOfCircle = radius => return Math.PI * radius * radius;’ , ‘const areaOfCircle = radius => { Math.PI * radius * radius};’ , ‘const areaOfCircle = radius => { return Math.PI * radius * radius};’], 'const areaOfCircle = radius => Math.PI * radius * radius;’],

new question ['What’s the purpose of a parameter?' ['To specify actual values to a function.’ , ‘To allow a function to accept data.’ , ‘To call a function.’ , ‘Red Panda’], ‘To allow a function to accept data.’],

new question ['What is the correct way to call the random method on the Math global object?’ [‘Math.random()’ , ‘random.Math()’ , ‘math.random()’ , ‘Math.(random)’], ‘Math.random()’],

new question ['What is string interpolation?’ [ ‘Printing a string to the console.’ , ‘Joining multiple strings together using operators like +’ , ‘Changing the value of a variable.’ , ‘ Using template literals to embed variables into strings.’], ‘ Using template literals to embed variables into strings.’],

new question ['Which of the following code snippets would cause an error?’ [ ‘let food = ‘chicken’; food = ‘sushi’;’ , ‘ const foodOne = ‘chicken’; const foodTwo = ‘sushi’;’ ,’const food = ‘chicken’; food = ‘sushi’;’ , ‘ let food = ‘chicken’; let drink =’seltzer’;’], ’const food = ‘chicken’; food = ‘sushi’;’]

];

let quiz = new quiz(questions);

populate();