const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const Mar = document.getElementById('Mario');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const submit = document.getElementById('Submitform');
const timer = document.getElementById('timer');

let shuffledQuestions, currentQuestionIndex;
let numCorrect = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    nextButton.classList.remove('hide')
    Mar.classList.add('hide')
    timerCount = 75;
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    startTimer()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'What is the total amount of stars you can collect in Super Mario 64?',
        answers:[
            {text: '64'},
            {text: '100'},
            {text: '150'},
            {text: '120'}
        ],
        correct: 3
    },
    {
        question: 'In Paper Mario: The Thousand Year Door, when do you first get baby Yoshi',
        answers:[
            {text: 'Glitzville'},
            {text: 'Twilight Town'},
            {text: 'Rogueport'},
            {text: 'Pit of 100 trials'}
        ],
        correct: 0
    },
    {
        question: 'Who is the villain in the Mario Series?',
        answers:[
            {text: 'Professor Snape'},
            {text: 'Mumbo Jumbo'},
            {text: 'Bowser'},
            {text: 'Toad'}
        ], 
        correct: 2
    },
    {
        question: 'In Super Mario 64 in the Cool, Cool Mountain course, who do you have to race to get a star?',
        answers:[
            {text: 'Link'},
            {text: 'A Big Penguin'},
            {text: 'Gruntilda'},
            {text: 'Naruto'}
        ],
        correct: 1
    },
    {
        question: 'What is Marios catchphrase?',
        answers:[
            {text: 'Oh Yeah! Luigi Time!'},
            {text: 'Okie Dokie'},
            {text: 'Pizza Dough!'},
            {text: 'Oh yeah! Mario Time'}
        ],
        correct: 3
    }
]

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timer.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
        alert('Looks like you ran out of time, back to the start with you!');
        return window.location.assign('index.html');
      }
    }, 1000);
  }