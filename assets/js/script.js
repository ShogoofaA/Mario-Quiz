const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const Mar = document.getElementById('Mario');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const submit = document.getElementById('Submitform');
const timer = document.getElementById('timer');
const Score = document.getElementById('theScore')
const Result = document.getElementById('Results')
const text = document.getElementById('submits')
var interval ;
const selectedAnswer = []


let shuffledQuestions, currentQuestionIndex;
let numCorrect = 0;
let questionCount = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    if (questionCount < 4) {
        questionCount++
        setNextQuestion()
    } else if (questionCount === 4) {
        questionContainerElement.classList.add('hide')
        submit.classList.remove('hide')
        nextButton.classList.add('hide')
        timer.classList.add('hide')
    }
})
text.addEventListener('click', showResults, console.log('clicked'))

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
    let select = selectedButton.textContent
    selectedAnswer.push(select)
    selectedButton.classList.add('selectAnswer')
    if (!correctAnswers.includes(select)) {
        timerCount -= 10;
    }

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
function showResults() {
    clearInterval(interval)
    submit.classList.add('hide')
    Result.classList.remove('hide')
// check every correct answer against every submitted answer
    correctAnswers.forEach(item => {
        if (selectedAnswer.includes(item)) numCorrect++
    })
// if answer= correct +1 for their score else no point after all has been tallied need to place into my span of theScore
    Score.innerText += timerCount + "!"
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
    },
    {
        question: 'In Paper Mario: The Thousand Year Door, when do you first get baby Yoshi',
        answers:[
            {text: 'Glitzville'},
            {text: 'Twilight Town'},
            {text: 'Rogueport'},
            {text: 'Pit of 100 trials'}
        ],
    },
    {
        question: 'Who is the villain in the Mario Series?',
        answers:[
            {text: 'Professor Snape'},
            {text: 'Mumbo Jumbo'},
            {text: 'Bowser'},
            {text: 'Toad'}
        ], 
    },
    {
        question: 'In Super Mario 64 in the Cool, Cool Mountain course, who do you have to race to get a star?',
        answers:[
            {text: 'Link'},
            {text: 'A Big Penguin'},
            {text: 'Gruntilda'},
            {text: 'Naruto'}
        ],
    },
    {
        question: 'What is Marios catchphrase?',
        answers:[
            {text: 'Oh Yeah! Luigi Time!'},
            {text: 'Okie Dokie'},
            {text: 'Pizza Dough!'},
            {text: 'Oh yeah! Mario Time'}
        ],
    }
]
const correctAnswers = ['120', 'Glitzville', 'Bowser', 'A Big Penguin', 'Oh yeah! Mario Time']
  
function startTimer() {
    interval = setInterval(function() {
      timerCount--;
      timer.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(interval);
        alert('Looks like you ran out of time, back to the start with you!');
        return window.location.assign('index.html');
      }
    }, 1000);
  }