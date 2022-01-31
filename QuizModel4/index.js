const Question_container = document.getElementById('Quiz_body');
const Submit = document.getElementById("submit");
const Result_container = document.getElementById("result");
const timeInterval = document.getElementById('time');
const time_format = document.getElementById('format');

const MyQuestions = [
    {
        question : "HTML Languages is easy to learn?",
        answer : {
            a : "Easy",
            b : "Difficult",
            c : "Moderate"
        },
        correct_answer : 'a'
    },
    {
        question : "What is the Best Language?",
        answer : {
            a : "HTML",
            b : "CSS",
            c : "JS"
        },
        correct_answer : 'b'
    },
    {
        question : "CSS Stands for",
        answer   : {
            a : "XYZ",
            b : "ABC",
            c : "XCV"
        },
        correct_answer : "c"
    }
];

function result()
{
    var numcorrect = 0;
    const answers = Question_container.querySelectorAll('.ans');
    const answerContainers = Question_container.querySelectorAll('.answers');
    MyQuestions.forEach((currentQUESTION, questionNo) => {
        const answerContainer = answerContainers[questionNo];
        const selector = `input[name=question${questionNo}]:checked`;
        const useranswer = answerContainer.querySelector(selector);
        if((useranswer || {}).value === currentQUESTION.correct_answer)
        {
            numcorrect++;
            answerContainers[questionNo].style.color = 'green';
            //answerContainer[].style.color = 'green';
            answers[questionNo].style.color = 'green';
            answers[questionNo].innerHTML = "Correct";
            
        }
        else
        {
            answerContainers[questionNo].style.color = 'red';
            answers[questionNo].style.color = 'red';
            answers[questionNo].innerHTML = "Wrong";
        }
    });
    Result_container.innerHTML = `You Scored ${numcorrect} out of ${MyQuestions.length}`;
}

function displayQuiz()
{
    const output = [];
    MyQuestions.forEach((currentQUESTION, questionNo) => {
        const answer = [];
        for(letter in currentQUESTION.answer)
        {
            answer.push(
                `<label>
                  <input type = "radio" name = "question${questionNo}" value = "${letter}">
                    ${letter} : ${currentQUESTION.answer[letter]}
                  </label>`
            );
        }
        output.push(
            `<div class="Questions">${questionNo + 1})${currentQUESTION.question}</div>
              <div class ="answers">${answer.join('')}</div>
              <div class = "ans"></div>`
        );

    });

    Question_container.innerHTML = output.join('');
}

displayQuiz();

let sec = 0;
let min = 0;
let hrs = 0;

showTime = () => {
   sec++;
   if(sec == 60)
   {
       min++;
       sec = 0;
   }
   if(min == 60)
   {
       hrs++;
       min = 0;
       sec = 0;
   }
   if(min == 0 && hrs == 0)
   {
       time_format.innerHTML = 'sec';
       timeInterval.innerHTML = ('0' + sec).slice(-2);
   }
   else if(hrs == 0 && min >= 1)
   {
       time_format.innerHTML = 'min : sec';
       timeInterval.innerHTML = ('0' + min).slice(-2) + '  ' + ':' + '   ' + ('0' + sec).slice(-2);
   }
   else
   {
       time_format.innerHTML = 'hrs : min : sec';
       timeInterval.innerHTML = ('0' + hrs).slice(-2) + ' ' + ':' + ('0' + min).slice(-2) + ' ' +':' + ('0' + sec).slice(-2);
   }
   Submit.addEventListener('click', () => {
       clearInterval(inerval);
   })
}

showTime();
var inerval = setInterval(function () {
	showTime();
}, 1000);

Submit.addEventListener('click',result);