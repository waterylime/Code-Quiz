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
    
    if (this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
    
};
};