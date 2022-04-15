const startButton = document.getElementById('start-button')
const Mar = document.getElementById('Mario')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    Mar.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
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
    setStatusClass(document.body, correct)
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
        question: 'Who is the main character of the Mario Series?',
        answers:[
            {text: 'Luigi', correct: false},
            {text: 'Wario', correct: false},
            {text: 'Peach', correct: false},
            {text: 'Mario', correct: true}
        ]
    },
    {
        question: 'In Paper Mario: The Thousand Year Door, when do you first get baby Yoshi',
        answers:[
            {text: 'Glitzville', correct: true},
            {text: 'Twilight Town', correct: false},
            {text: 'Rogueport', correct: false},
            {text: 'Pit of 100 trials', correct: false}
        ]
    },
    {
        question: 'Who is the villain in the Mario Series?',
        answers:[
            {text: 'Waluigi', correct: false},
            {text: 'Mumbo Jumbo', correct: false},
            {text: 'Bowser', correct: true},
            {text: 'Toad', correct: false}
        ]
    },
    {
        question: 'In Super Mario 64 in the Cool Cool Mountain course, who do you have to race to get a star?',
        answers:[
            {text: 'Link', correct: false},
            {text: 'A Big Penguin', correct: true},
            {text: 'Gruntilda', correct: false},
            {text: 'Naruto', correct: false}
        ]
    },
    {
        question: 'What is Marios catchphrase?',
        answers:[
            {text: 'Oh Yeah! Luigi Time!', correct: false},
            {text: 'Okie Dokie', correct: false},
            {text: 'Pizza Dough!', correct: false},
            {text: 'Oh yeah! Mario Time', correct: true}
        ]
    }
]

function time() {
    let timeInterval = setInterval(function () {
        timeLeft--;
        time.textcontent = timeLeft
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}