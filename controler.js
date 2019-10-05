function Question (text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    
    Question.prototype.correctAnswer =function (choice){
        return choice === this.answer;
    };
    
    };




function Quiz(question){

    
this.score = 0;
this.question = question;
this.questionIndex = 0;

Quiz.prototype.getQuestionIndex = () =>{
    return this.questionIndex;
    //return this.question[this.questionIndex];
};

Quiz.prototype.isEnded = () =>{
    return this.question.length === this.questionIndex;
};

Quiz.prototype.guess = answer =>{
    console.log(answer)
    if (myQuestion.correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
    
};
};