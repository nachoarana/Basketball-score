let scoreHome = 0
let scoreAway = 0

const counterHome = document.getElementById("score_home")
const counterAway = document.getElementById("score_away")

counterHome.textContent = scoreHome
counterAway.textContent = scoreAway

document.getElementById("home1").addEventListener('click', () => {
    scoreHome++
    counterHome.textContent = scoreHome
    document.getElementById("audio_wee").play()
})

document.getElementById("home2").addEventListener('click', () => {
    scoreHome = scoreHome +2
    counterHome.textContent = scoreHome
    document.getElementById("audio_wee").play()

})

document.getElementById("home3").addEventListener('click', () => {
    scoreHome = scoreHome +3
    counterHome.textContent = scoreHome
    document.getElementById("audio_wee").play()

})

document.getElementById("away1").addEventListener('click', () => {
    scoreAway++
    counterAway.textContent = scoreAway
    document.getElementById("audio_boo").play()

})

document.getElementById("away2").addEventListener('click', () => {
    scoreAway = scoreAway +2
    counterAway.textContent = scoreAway
    document.getElementById("audio_boo").play()

})

document.getElementById("away3").addEventListener('click', () => {
    scoreAway = scoreAway +3
    counterAway.textContent = scoreAway
    document.getElementById("audio_boo").play()

})