# Hello :wave: 
# In this Repository we will show various JS Quiz Model one can develop and can Boost JS Skills 
# Let See Models One by One

# Model 1
## HTML

- In HTML we Create 3 divs and specify with 3 id's to store questions and Submit Button and Feedback for Correct and     Wrond answer
- and we link this to js file to display questions and results

## CSS

- In this section we style the questions and answers and red color for wrong answer and green color for correct answer


## JS

- Get elements of html by using 'getElementById'
- Create a Array of objects for stroing question and choice and Correct Choice, and array output for displaying questions and answer
- Build Quiz function
```
We loop through every object/index of a array using forEach Loop and perofrm following Iteration

 create choice array and intiallize null 
 and loop through the current object and push the choices of object(in html format) into the choice array
 and now push both current object question and choice array(using join function) syntax : choice.join(' ') and one more div with class = 'answer'(to display message 'correct or wrong' for every question individually) 
 and now display every question and choices by using innerHTML = output.join(' ')
```
- Call the Build Quiz Function

- Display Result Function
```

correct_answers (variable to store the correct answer and display after submitting) intiallize with 0
create answer = Question_container.querySelectorAll('.ans')//to give feedback for answer
create  answerContainers = Question_container.querySelectorAll('.answers') //  to gather all choice for each question and to check with user answers
 
Now loop through every question:
  and find the user choice by using the checked attribute
  and now compare the user answer and answerContainer[question No]
  if equal then we color the choice with green and display the message 'Correct' and increment 'correct_answers by 1'
  else color the choices with red and display message 'wrong'
  we display the message with the 'answer'.innerHTML  
  and color the choice with style.color

Finally we display the correct_answers in HTML by using the HTML id(last id) 
```

- Finally We add a eventListener to submitButton called 'Click' and we call the Display Result Function When user Submit Quiz
- In coding i updated the comments for instructions check it!!! 

# Model 2

> Update Soon
