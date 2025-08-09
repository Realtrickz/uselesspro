const startBtn = document.getElementById('startBtn');
const whiteFlagBtn = document.getElementById('whiteFlagBtn');
const landing = document.getElementById('landing');
const captcha = document.getElementById('captcha');
const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const prizeBtn = document.getElementById('prizeBtn');
let runAway = true;

startBtn.addEventListener('mouseover', () => {
    if (runAway) {
        startBtn.style.position = 'absolute';
        startBtn.style.top = Math.random() * window.innerHeight + 'px';
        startBtn.style.left = Math.random() * window.innerWidth + 'px';
    }
});

startBtn.addEventListener('click', () => {
    runAway = false;
    landing.style.display = 'none';
    captcha.style.display = 'block';
});

whiteFlagBtn.addEventListener('click', () => {
    runAway = false;
    landing.style.display = 'none';
    captcha.style.display = 'block';
});

document.querySelectorAll('.captcha-option').forEach(btn => {
    btn.addEventListener('click', () => {
        captcha.style.display = 'none';
        quiz.style.display = 'block';
        startQuiz();
    });
});

const questions = [
    {q: 'What is 2 + 2?', a: ['4', '22', 'Fish']},
    {q: 'Best programming language?', a: ['JavaScript', 'Python', 'Wrong']}
];
let index = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    if (index >= questions.length) {
        quiz.style.display = 'none';
        results.style.display = 'block';
        return;
    }
    document.getElementById('question').textContent = questions[index].q;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    questions[index].a.forEach(ans => {
        const btn = document.createElement('button');
        btn.textContent = ans;
        btn.onclick = () => {
            alert('Wrong!');
            index++;
            showQuestion();
        };
        answersDiv.appendChild(btn);
    });
}

prizeBtn.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});