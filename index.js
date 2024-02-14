let scoreHome = 0
let scoreAway = 0

const counterHome = document.getElementById("score_home")
const counterAway = document.getElementById("score_away")

render()

document.addEventListener("click", function(e){
    if (e.target.dataset.team){
        sumScore(e.target.dataset.team,e.target.dataset.score)

    }
})

function sumScore(who, points){
    if (who === "home"){
        scoreHome = scoreHome + Number(points)
        document.getElementById("audio_wee").play()
    } else if (who === "away"){
        scoreAway = scoreAway + Number(points)
        document.getElementById("audio_boo").play()
    }
    render()
}

function render(){
    counterHome.textContent = scoreHome
    counterAway.textContent = scoreAway
}

document.getElementById("reset").addEventListener("click", ()=>{
    scoreHome = 0
    scoreAway = 0
    render()
    document.getElementById("audio_boing").play()
})