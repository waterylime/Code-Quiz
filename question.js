question = text, choices, answer =>{
this.text = text;
this.choices = choices;
this.answer = answer;
};

question.prototype.correctAnswer =function (choice){
    return choice === this.answer;
};




function quiz(question){
    this.score = 0;
    this.question = question;
    this.questionIndex = 0;
    };
    
    quiz.prototype.getQuestionIndex = () =>{
        return this.question (this.questionIndex);
    };
    
    quiz.prototype.isEnded = () =>{
        return this.question.length === this.questionIndex;
    };
    
    quiz.prototype.guess = answer =>{
        
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    
    };