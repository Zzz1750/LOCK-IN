// Initial dataset

var result_past_score = document.getElementById('result_past_score');
var result_past_accuracy = document.getElementById('result_past_accuracy');

const initialData = {
    "gridshot_page": { "score": 1, "accuracy": 50 },
    "headshot_page": { "score": 2, "accuracy": 50 },
    "microshot_page": { "score": 3, "accuracy": 50 },
    "onetap_page": { "score": 4, "accuracy": 50 },
    "burstshot_page": { "score": 5, "accuracy": 50 },
    "deathshot_page": { "score": 6, "accuracy": 50 },
    "mapswitch_page": { "score": 7, "accuracy": 50 },
    "multishot_page": { "score": 8, "accuracy": 50 },
    "runner_page": { "score": 9, "accuracy": 50 },
    "singletrack_page": { "score": 10, "accuracy": 50 },
    "parallel_page": { "score": 12, "accuracy": 50 },
    "evadetrack_page": { "score": 13, "accuracy": 50 }
};

function initializeLocalStorage() {
    if (!localStorage.getItem('highScores')) {
        localStorage.setItem('highScores', JSON.stringify(initialData));
        console.log('Local storage initialized with initial dataset.');
    } else {
        console.log('Local storage already contains data.');
    }
}

function saveHighScores(gameName, newScore, newAccuracy) {
    const existingScores = JSON.parse(localStorage.getItem('highScores'));

    if (existingScores[gameName]) {
        const currentScore = existingScores[gameName].score;
        const currentAccuracy = existingScores[gameName].accuracy;

        if (newScore > currentScore || newAccuracy > currentAccuracy) {
            existingScores[gameName] = {
                score: newScore,
                accuracy: newAccuracy
            };
            console.log(`${gameName} updated: Score = ${newScore}, Accuracy = ${newAccuracy}`);
            result_past_score.innerHTML="SCORE: "+newScore+" pts";
            result_past_accuracy.innerHTML="ACCURACY: "+newAccuracy+" %";
        } else {
            console.log(`${gameName} not updated: Current Score = ${currentScore}, Current Accuracy = ${currentAccuracy}`);
            result_past_score.innerHTML="SCORE: "+currentScore+" pts";
            result_past_accuracy.innerHTML="ACCURACY: "+currentAccuracy+" %";
        }
    } else {
        console.log(`Game ${gameName} not found in the dataset.`);
        
    }

    localStorage.setItem('highScores', JSON.stringify(existingScores));

    console.log('Current High Scores:', existingScores);
}

initializeLocalStorage();
