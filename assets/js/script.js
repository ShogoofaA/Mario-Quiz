const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
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
    nextButton.classList.add('hide')
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
    nextButton.classList.remove('hide')
}
const questions = [
    {
        question: 'What is the total amount of stars you can collect in Super Mario 64?',
        answers:[
            {text: '64', correct: false},
            {text: '100', correct: false},
            {text: '150', correct: false},
            {text: '120', correct: true}
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
            {text: 'Professor Snape', correct: false},
            {text: 'Mumbo Jumbo', correct: false},
            {text: 'Bowser', correct: true},
            {text: 'Toad', correct: false}
        ]
    },
    {
        question: 'In Super Mario 64 in the Cool, Cool Mountain course, who do you have to race to get a star?',
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