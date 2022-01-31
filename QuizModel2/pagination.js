const loader = document.getElementsByClassName('loader');
const quiz = document.getElementsByClassName('content');

const MyQuestions = 
[
    {
        question : "2 + 5 = ?",
        answer : {
            a : "4",
            b : "5",
            c : "7"
        },
        correctAnswer : "c"
    },
    {
        question : "2 * 8 = ?",
        answer : {
            a : "10",
            b : "16",
            c : "20"
        },
        correctAnswer : "b"
    },
    {
        question : "10 / 10 = ?",
        answer : {
            a : "0.5",
            b : "1",
            c : "1.5"
        },
        correctAnswer : "b"
    }
];

function BuildQuiz()
{
    const output = [];
    MyQuestions.forEach((currentQuestion, questionNo) => {
        const answer = [];
        for(letter in currentQuestion.answer)
        {
            answer.push
            (
                `<label>
                    <input type = "radio" name = "question${questionNo}" value = "${letter}">
                    ${letter} : ${currentQuestion.answer[letter]}
                </label>`
            );
        }

        output.push(`<div class = "slide">
                      <div class = "questions">${questionNo+1})${currentQuestion.question}</div>
                      <div class = "answers">${answer.join('')}</div>
                      <div class = "ans"></div>
                     </div>`);
    });
    quizContainer.innerHTML = output.join("");

}

function showQuestions(n)
{
   slides[currentquestion].classList.remove('active-slide');
   slides[n].classList.add('active-slide');
   currentquestion = n;
   if(currentquestion === 0)
   {
       previousButton.style.display = 'none';
   }
   else
   {
       previousButton.style.display = 'inline-block';
   }
   if(currentquestion == slides.length-1)
   {
       nextButton.style.display = 'none';
       submitButton.style.display = 'inline-block';
   }
   else
   {
       submitButton.style.display = 'none';
       nextButton.style.display = 'inline-block';
   }
}

function showNextQuestion()
{
    showQuestions(currentquestion + 1);
}

function showPreviousQuestion()
{
    showQuestions(currentquestion-1);
}

function showResults()
{
    let numcorrect = 0;
    const answerContainers = quizContainer.querySelectorAll(".answers");
    const answer = quizContainer.querySelectorAll(".ans");
    MyQuestions.forEach((currentQuestion, questionNo) => {
        const answerContainer = answerContainers[questionNo];
        const selector = `input[name = "question${questionNo}"]:checked`;
        const useranswer = (answerContainer.querySelector(selector) || {}).value;

        if(useranswer === currentQuestion.correctAnswer)
        {
            numcorrect += 10;
            answer[questionNo].innerHTML = 'Correct';
            answer[questionNo].style.color = 'green';
            answerContainers[questionNo].style.color = 'green';
        }
        else
        {
            answer[questionNo].innerHTML = 'Wrong';
            answer[questionNo].style.color = 'red';
            answerContainers[questionNo].style.color = 'red';
        }
    });
    localStorage.setItem('recentScore',numcorrect);
    resultContainer.innerHTML = `You Scored ${numcorrect} out of 30`;
}

const quizContainer = document.getElementById("quizContainer");
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

BuildQuiz();

const slides = document.querySelectorAll('.slide');
var currentquestion = 0;

showQuestions(currentquestion);

previousButton.addEventListener('click',showPreviousQuestion);
nextButton.addEventListener('click',showNextQuestion);
submitButton.addEventListener('click', () => {
   showResults();
   setTimeout(() => {
       window.location.assign("end.html");
   }, 1000);
});


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementsByClassName("loader")[0].style.display = "none";
  document.getElementsByClassName("content")[0].style.display = "block";
}