
let quizContainer = document.getElementById('quizContainer');

let quizData = [
    {
        question: 'which player is famous for play helicopter shot in cricket?',
        options: ['virat kohli', 'rohit sharma', 'MS dhoni', 'ravindra jadeja'],
        correctAnswer: 'MS dhoni'
    },
    {
        question: 'which planet is known as the red planet ?',
        options: ['earth', 'mars', 'jupiter', 'venus'],
        correctAnswer: 'mars'
    },
    {
        question: 'which country is powerfull in technology according to criteria?',
        options: ['USA', 'india', 'japan', 'china'],
        correctAnswer: 'USA'
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    let currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <div class="question">
            ${currentQuestion.question}
        </div>
        <ul class="options">
            ${currentQuestion.options.map(option =>
                `<li><button onclick="checkAnswer('${option}')">${option}</button></li>`).join('')}
        </ul>
        <div id="result"></div>
    `;
}

function checkAnswer(selectedOption) {
    let currentQuestion = quizData[currentQuestionIndex];
    let resultDiv = document.getElementById('result');
    let buttons = document.querySelectorAll('.options button');

    buttons.forEach(button => {
        if (button.textContent === currentQuestion.correctAnswer) {
            button.classList.add('correct');
        }
        if (button.textContent === selectedOption && selectedOption !== currentQuestion.correctAnswer) {
            button.classList.add('incorrect');
        }
    });

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        resultDiv.textContent = 'Correct!';
    } else {
        resultDiv.textContent = 'Incorrect!';
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(displayQuestion, 1500);
    } else {
        quizContainer.innerHTML = `
            <h2>Quiz completed</h2>
            <p>your score: ${score}/${quizData.length}</p>
        `;
    }
}

displayQuestion();