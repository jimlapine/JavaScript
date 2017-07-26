var Quiz = {
	
	init: function(){
		this.questions = [];
		this.score = 0;
	},
	createQuestion: function (question, answers, correctAnswer){
		var question = {			
			question: question,
			answers: answers,
			correctAnswer: correctAnswer
		};
		Quiz.questions.push(question);
		return Quiz.questions;
	},
	askQuestion: function(){
		var questionToBeAsked = Math.floor(Math.random() * Quiz.questions.length);
				
		console.log(Quiz.questions[questionToBeAsked].question);
		Quiz.questions[questionToBeAsked].answers.forEach(function (elem, index) {
			console.log((index + 1) + ': ' + elem);
		});
		
		var answer = prompt(Quiz.questions[questionToBeAsked].question);
		if(answer !== 'exit'){
			this.checkAnswer(Quiz.questions[questionToBeAsked], answer);
			this.askQuestion();
		} else {
			console.log('Goodbye and thank you for playing.');
		}
	},
	checkAnswer: function(question, answer){
//		console.log(question.question, answer, question.correctAnswer);
		if(parseInt(answer) === question.correctAnswer){
			this.score += 1;
			console.log('Correct! Your score is ' + this.score);
		} else {
			console.log('Sorry you got that one wrong.');
		}		
	}
};

Quiz.init();
console.log(Quiz);

Quiz.createQuestion('What is your quest?', ['I seek the holy grail', 'To fight the chicken of Bristol'], 1);
Quiz.createQuestion('What is your favorite color?', ['red', 'blue'], 1);
Quiz.createQuestion('What is air speed velocity of an unladen swallow ?', ['African', 'European', 'I don\'t know'], 3);

//questions.forEach(function (elem) {
//	console.log('question: ' + elem.question);
//	console.log('answers: ' + elem.answers);
//	console.log('correctAnswer: ' + elem.correctAnswer);
//});
Quiz.askQuestion();
//console.log('question: ' + question);
//answers.forEach(function (elem) {
//	console.log(elem);
//});
//var selectedAnswer = prompt(question);
//if(selectedAnswer === correctAnswer){
//	console.log('correct');
//}