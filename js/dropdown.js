const dropGames = document.querySelector('.dropGamesButton');

const dropGamesMenu = document.querySelector('.dropGamesContent');

dropGames.addEventListener('click', () => {
    dropGames.classList.toggle('active');
    dropGamesMenu.classList.toggle('active');
})