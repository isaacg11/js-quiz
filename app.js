let questionOutput = document.getElementById('questionOutput');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let answerInput = document.getElementById('answerInput');

class Quiz {
  constructor(grade, progress, questions) {
    this.grade = 0;
    this.progress = 0;
    this.questions = [
      {
        question: 'what is 1 + 1?',
        options: ['1', '2', '3', '4'],
        answer: '2'
      },
      {
        question: 'what is 1 + 2?',
        options: ['1', '2', '3', '4'],
        answer: '3'
      },
      {
        question: 'what is 1 + 3?',
        options: ['1', '2', '3', '4'],
        answer: '4'
      },
      {
        question: 'what is 1 + 4?',
        options: ['1', '2', '3', '5'],
        answer: '5'
      }
    ]
  }
}

let quiz = new Quiz();
let userAnswer = [];

function startQuiz() {
  questionOutput.innerHTML = quiz.questions[quiz.progress].question;
  opt1.innerHTML = quiz.questions[quiz.progress].options[0];
  opt2.innerHTML = quiz.questions[quiz.progress].options[1];
  opt3.innerHTML = quiz.questions[quiz.progress].options[2];
  opt4.innerHTML = quiz.questions[quiz.progress].options[3];
}

function nextQuestion() {
  if(quiz.progress < (quiz.questions.length - 1)) {
    quiz.progress += 1;
    questionOutput.innerHTML = quiz.questions[quiz.progress].question;
    opt1.innerHTML = quiz.questions[quiz.progress].options[0];
    opt2.innerHTML = quiz.questions[quiz.progress].options[1];
    opt3.innerHTML = quiz.questions[quiz.progress].options[2];
    opt4.innerHTML = quiz.questions[quiz.progress].options[3];
    userAnswer.push(answerInput.value);
  } else {
    userAnswer.push(answerInput.value);
    grade();
  }
}

function grade() {
  for(let i = 0; i < quiz.questions.length; i++) {
    if(userAnswer[i] === quiz.questions[i].answer) {
      quiz.grade += 1;
    }
  }

  alert(`Your grade is ${quiz.grade}/${quiz.questions.length}`);
}
