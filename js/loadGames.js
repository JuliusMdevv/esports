const filename = window.location.pathname.split('/').pop().replace('.html', '');

const coachEl = document.getElementById("coach");
const imgEl = document.getElementById("gameImage");
const gameDescription = document.getElementById("gameInfo");

const dataDir = "../../../data/games.json";


fetch(dataDir)
    .then(res => res.json())
    .then(data => {
        const gameData = data[filename];

        coachEl.innerText = `Our coach for this game is ${gameData.coach}!`
    })