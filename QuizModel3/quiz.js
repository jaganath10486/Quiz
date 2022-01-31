const questionContainer = document.getElementById('questions');
const choices = Array.from(document.getElementsByClassName('choice-suffix'));
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const submit = document.getElementById("submit");
const progressBar = document.getElementById('insideBar');

let nextQuestions = [];
let currentQuestion = {};
let previosQuestions = [0,0,0];

let score = 0;
const marksForCrct = 10;
let questionCount = 0;
let aceptingAnswer  = false;
let maxQuestions = 3;
let questionIndex = 0;

let MyQuestions = [
    {
        questions : "What are three Web Languages?",
        1 : "HTML",
        2 : "CSS",
        3 : "JS",
        4 : 'All The Above',
        correct_answer : 4
    },
    {
        questions : "What is HTML Stands For",
        1 : "A",
        2 : "B",
        3 : "C",
        4 : 'none',
        correct_answer : 4
    },
    {
        questions : "What is JS Stands for: ",
        1 : "JavaS",
        2 : "Type Script",
        3 : "Java Script",
        4 : 'All The Above',
        correct_answer : 3
    }
];
startQuiz = () =>
{
    questionCount = 0;
    previous.style.display = 'none';
    nextQuestions = [...MyQuestions];
    maxQuestions = nextQuestions.length;
    submit.style.display = 'none';
    displayQuestion();
    
}
displayQuestion = () =>
{
    questionIndex = questionCount;  
    currentQuestion = MyQuestions[questionIndex];
    questionContainer.innerHTML = currentQuestion.questions;
    choices.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerHTML = currentQuestion[number];
    });
    progressBar.style.width = `${((questionCount + 1) / maxQuestions) * 100}%`;
}

function showQuestions(n)
{
   displayQuestion();
   if(questionIndex === 0)
   {
       previous.style.display = 'none';
   }
   else
   {
       previous.style.display = 'inline-block';
   }
   if(questionIndex == maxQuestions-1)
   {
       next.style.display = 'none';
       submit.style.display = 'inline-block';
   }
   else
   {
       submit.style.display = 'none';
       next.style.display = 'inline-block';
   }
}

function showNextQuestion()
{
    questionCount++;
    showQuestions(questionIndex + 1);
}

function showPreviousQuestion()
{
    questionCount--;
    showQuestions(questionIndex-1);
}

function showResult()
{

    choices.forEach((choice, index) => {
        choice.addEventListener('click', e => {
            const selectedChoice = e.target;
            selectedChoice.style.backgroundColor = 'blue';
            const selectedAnswer = selectedChoice.dataset['number'];
            if(selectedAnswer == MyQuestions[index].correct_answer)
            {
                score += marksForCrct;
            }
        });
    });
    console.log(score);
}

previous.addEventListener('click',showPreviousQuestion);
next.addEventListener('click',showNextQuestion);

startQuiz();
submit.addEventListener('click',showResult);