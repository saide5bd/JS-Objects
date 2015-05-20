var questions = [
	{
		question: 'What is the name Bidrohi Koby?',
		answer: 'kazi nazrul islam'
	},
	{
		question: 'What is the Capital of Bangladesh?',
		answer: 'dhaka'
	},
	{
		question: 'Who is the number one All-Rounder on Cricket Now?',
		answer: 'sakib al hasan'
	},
	{
		question: 'Who is prime minister of Bangladesh now?',
		answer: 'shiekh hasina'
	}
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print (message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = html;
}

function buildList (arr) {
	// body...
	var listHTML = '<ol>';
	for (var i = 0; i < arr.length; i += 1) {
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
	question = questions [i].question;
	answer = questions [i].answer;
	response = prompt(question);
	response = response.toLowerCase();
	if (response === answer) {
		correctAnswers += 1;
		correct.push(question);
	} else{
		wrong.push(question);
	}
}

html = '<p> You got ' + correctAnswers + ' questions(s) right. </p>';
html += '<h2>You got these questions correct: </h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong: </h2>';
html += buildList(wrong);
print(html);