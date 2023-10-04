let score1 = 0;
let score2 = 0;
document.getElementById("score1").textContent = score1
document.getElementById("score2").textContent = score2

function addOne(scoreBox){
    if (scoreBox === 1){
        score1 = score1 + 1
        document.getElementById("score1").textContent = score1
    }
    else if (scoreBox === 2)
    {
        score2 = score2 + 1
        document.getElementById("score2").textContent = score2
    }
        
}

function addTwo(scoreBox){
    if (scoreBox === 1){
        score1 = score1 + 2
        document.getElementById("score1").textContent = score1
    }
    else if (scoreBox === 2)
    {
        score2 = score2 + 2
        document.getElementById("score2").textContent = score2
    }
}

function addThree(scoreBox){
    if (scoreBox === 1){
        score1 = score1 + 3
        document.getElementById("score1").textContent = score1
    }
    else if (scoreBox === 2)
    {
        score2 = score2 + 3
        document.getElementById("score2").textContent = score2
    }
}