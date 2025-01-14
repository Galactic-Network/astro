document.addEventListener('DOMContentLoaded', () => {
    fetch('/json/games.json')
        .then(response => response.json())
        .then(data => {
            const gameContainer = document.querySelector('.game-container');

            data.forEach(game => {
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                imageContainer.onclick = function() {
                    window.location.href = game.url;
                };

                const img = document.createElement('img');
                img.src = game.img;
                img.alt = game.name; // Using game.name for alt text
                img.classList.add('image');

                const overlay = document.createElement('div');
                overlay.classList.add('overlay');
                overlay.textContent = game.title; // Using game.name for overlay text

                imageContainer.appendChild(img);
                imageContainer.appendChild(overlay);

                gameContainer.appendChild(imageContainer);
            });
        })
        .catch(error => console.error('Error fetching the games data:', error));
});
