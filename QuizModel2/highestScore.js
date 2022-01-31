const highestScores = document.getElementById('highscores');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

let output = []

function DisplayHighScores()
{
    highScores.forEach(currentScore => {
        console.log(currentScore.score);
        output.push(
            `<li>${currentScore.username} - ${currentScore.score}</li>`);
    });

    highestScores.innerHTML = `<ul>
                                ${output.join('')}
                              </ul>`;
}

DisplayHighScores();
