const Question_container = document.getElementById('Quiz_body');//For displaying questions and choices
const Submit = document.getElementById("submit");// Submit Button
const Result_container = document.getElementById("result");//To display Result
//questons and choice array
const MyQuestions = [
    {
        question : "What is Web Language?",
        answer : {
            a : "HTML",
            b : "C",
            c : "JAVA"
        },
        correct_answer : 'a'
    },
    {
        question : "HTML Stands For?",
        answer : {
            a : "Hypertext Markup Language",
            b : "Hyperloaded Language",
            c : "Design Language"
        },
        correct_answer : 'a'
    },
    {
        question : "CSS Stands for",
        answer   : {
            a : "Cascading Language",
            b : "Cascading Style Sheets",
            c : "Style Cascading"
        },
        correct_answer : "b"
    }
];

//result function
function result()
{
    var numcorrect = 0;//variable to store the correct answer
    const answers = Question_container.querySelectorAll('.ans');//Feedback Message for Every question if correct or Wrong
    const answerContainers = Question_container.querySelectorAll('.answers');//Choices of Every Questions
    MyQuestions.forEach((currentQUESTION, questionNo) => {
        const answerContainer = answerContainers[questionNo]; //For current Question
        const selector = `input[name=question${questionNo}]:checked`; 
        const useranswer = answerContainer.querySelector(selector); // user answer
        if((useranswer || {}).value === currentQUESTION.correct_answer)//here i used null {} value if user leaves the question to avoid error 
        {
            numcorrect++;
            answerContainers[questionNo].style.color = 'green';//color 
            answers[questionNo].style.color = 'green'; // message color
            answers[questionNo].innerHTML = "Correct"; // message 
            
        }
        else
        {
            answerContainers[questionNo].style.color = 'red';//color
            answers[questionNo].style.color = 'red';//message color
            answers[questionNo].innerHTML = "Wrong";//message
        }
    });
    Result_container.innerHTML = `You Scored ${numcorrect} out of ${MyQuestions.length}`; // displaying crct answers
}

function displayQuiz()
{
    const output = [];//output
    MyQuestions.forEach((currentQUESTION, questionNo) => {
        const answer = [];
        for(letter in currentQUESTION.answer)
        {
            //to push available choices
            answer.push(
                `<label>
                  <input type = "radio" name = "question${questionNo}" value = "${letter}">
                    ${letter} : ${currentQUESTION.answer[letter]}
                  </label>`
            );
        }
        // to push choice container and question and div element 
        output.push(
            `<div class="Questions">${questionNo + 1})${currentQUESTION.question}</div>
              <div class ="answers">${answer.join('')}</div>
              <div class = "ans"></div>`
        );

    });

    Question_container.innerHTML = output.join('');//displaying in html
}

displayQuiz();

Submit.addEventListener('click',result);//when user submit then result function called