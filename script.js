function createGrid(size) {
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; 
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');
        square.interactionCount = 0; 

        square.addEventListener('mouseover', () => {
            if (square.interactionCount === 0) {
                square.style.backgroundColor = randomRGB(); 
            } else {
                square.style.backgroundColor = darken(square.style.backgroundColor);
            }
            square.interactionCount++;
        });
        container.appendChild(square);
    }
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function darken(rgb) {
    const rgbValues = rgb.match(/\d+/g).map(Number);
    const darkenedValues = rgbValues.map(value => value * 0.9);
    return `rgb(${darkenedValues.join(', ')})`;
}

// Initialize default grid
createGrid(16);

// Button to change grid size
document.getElementById('gridSizeButton').addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter new grid size (max 100):", "16"), 10);
    if (newSize > 100) newSize = 100;
    createGrid(newSize);
});
