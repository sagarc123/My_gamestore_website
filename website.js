const games = [
    { name: 'The Legend of Zelda: Breath of the Wild', genre: 'Adventure', price: 59.99, image: 'images/001.jpg' },
    { name: 'Super Mario Odyssey', genre: 'Platformer', price: 49.99, image: 'images/002.jpg' },
    { name: 'Red Dead Redemption 2', genre: 'Action', price: 39.99, image: 'images/003.jpg' },
    { name: 'The Witcher 3: Wild Hunt', genre: 'RPG', price: 29.99, image: 'images/004.jpg' },
    { name: 'Minecraft', genre: 'Sandbox', price: 19.99, image: 'images/005.jpg' },
    { name: 'Fortnite', genre: 'Battle Royale', price: 0.00, image: 'images/006.jpg' },
    { name: 'Call of Duty: Modern Warfare', genre: 'Shooter', price: 59.99, image: 'images/007.jpg' },
    { name: 'Among Us', genre: 'Party', price: 4.99, image: 'images/008.jpg' },
    { name: 'Dark Souls III', genre: 'Action RPG', price: 59.99, image: 'images/009.jpg' },
    { name: 'Valorant', genre: 'Tactical Shooter', price: 0.00, image: 'images/010.jpg' },
    { name: 'The Last of Us Part II', genre: 'Action-Adventure', price: 49.99, image: 'images/011.jpg' },
    { name: 'Cyberpunk 2077', genre: 'Action RPG', price: 39.99, image: 'images/012.jpg' },
    { name: 'Assassin\'s Creed Valhalla', genre: 'Action RPG', price: 59.99, image: 'images/013.jpg' },
    { name: 'Ghost of Tsushima', genre: 'Action-Adventure', price: 59.99, image: 'images/014.jpg' },
    { name: 'Sekiro: Shadows Die Twice', genre: 'Action-Adventure', price: 49.99, image: 'images/015.jpg' },
    { name: 'God of War', genre: 'Action-Adventure', price: 39.99, image: 'images/016.jpg' },
    { name: 'Horizon Zero Dawn', genre: 'Action RPG', price: 29.99, image: 'images/017.jpg' },
    { name: 'Monster Hunter: World', genre: 'Action RPG', price: 39.99, image: 'images/018.jpg' },
    { name: 'Death Stranding', genre: 'Action', price: 39.99, image: 'images/019.jpg' },
    { name: 'Nioh 2', genre: 'Action RPG', price: 49.99, image: 'images/020.jpg' },
    { name: 'Control', genre: 'Action-Adventure', price: 29.99, image: 'images/021.jpg' },
    { name: 'Star Wars Jedi: Fallen Order', genre: 'Action-Adventure', price: 49.99, image: 'images/022.jpg' },
    { name: 'Borderlands 3', genre: 'Action RPG', price: 59.99, image: 'images/023.jpg' },
    { name: 'Doom Eternal', genre: 'First-Person Shooter', price: 59.99, image: 'images/024.jpg' },
    { name: 'Marvel\'s Spider-Man: Miles Morales', genre: 'Action-Adventure', price: 49.99, image: 'images/025.jpg' },
    { name: 'Persona 5 Royal', genre: 'RPG', price: 59.99, image: 'images/026.jpg' },
    { name: 'Resident Evil Village', genre: 'Survival Horror', price: 59.99, image: 'images/027.jpg' },
    { name: 'Final Fantasy VII Remake', genre: 'Action RPG', price: 59.99, image: 'images/028.jpg' },
    { name: 'Demon\'s Souls', genre: 'Action RPG', price: 69.99, image: 'images/029.jpg' },
    { name: 'Bloodborne', genre: 'Action RPG', price: 29.99, image: 'images/030.jpg' },
    { name: 'The Elder Scrolls V: Skyrim', genre: 'Action RPG', price: 39.99, image: 'images/031.jpg' },
    
];
function searchGames() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const selectedGenre = document.getElementById('genreSelect').value.toLowerCase(); // Get selected genre

    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';
    
    let filteredGames = games.filter(game => 
        game.name.toLowerCase().includes(searchInput) && 
        (selectedGenre === 'all' || game.genre.toLowerCase() === selectedGenre) // Filter by genre
    );
    
    filteredGames.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        
        const gameImage = document.createElement('img');
        gameImage.src = game.image;
        gameImage.alt = game.name;
        
        const gameDetails = document.createElement('div');
        gameDetails.classList.add('game-details');
        gameDetails.innerHTML = `<strong>${game.name}</strong><br>Genre: ${game.genre}<br>Price: $${game.price.toFixed(2)}`;
        
        gameItem.appendChild(gameImage);
        gameItem.appendChild(gameDetails);
        gameList.appendChild(gameItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    searchGames(); // Display all games by default
});

function filterByGenre() {
    searchGames(); // Call searchGames function to apply filtering
}