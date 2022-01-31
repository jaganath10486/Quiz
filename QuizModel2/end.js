const userName = document.getElementById('name');
const saveScore = document.getElementById('save');
const score = document.getElementById('score');

let clicks = 0;

const recentScore = localStorage.getItem('recentScore');
score.innerHTML = recentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

const maxHightScores = 5;


userName.addEventListener('keyup', ()=>
{
    if(clicks == 1)
    {
        saveScore.disabled = true;
    }
    else
    {
       saveScore.disabled = !userName.value;
    }
});


function saveHighScore()
{
       clicks++;
       const score = {
        score: recentScore,
        username: userName.value
      };
    
      highScores.push(score);
    
      highScores.sort((a,b) => b.score - a.score);
      highScores.splice(5);
    
      localStorage.setItem('highScores', JSON.stringify(highScores));
      saveScore.disabled = true; 
};

saveScore.addEventListener('click', saveHighScore);

