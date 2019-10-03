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
    this.questionIndex++;

    if (this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
};