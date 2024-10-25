let tab = 'memory'

const memoryDiv = document.querySelector('.main-memory');

const memoryBt = document.querySelector('.memory-img');

const colors = ["blue", "purple", "pink", "orange", "green", "red"];
const numberOfSquares = 12;

function updateScale(){
    const container = document.querySelector('.main-memory');
    const vpWidth = window.innerWidth;
    const vpHeight = window.innerHeight;

    const scaleX = vpWidth / 668;
    const scaleY = vpHeight / 668;

    const scale = Math.min(scaleX, scaleY);

    container.style.transform = `scale(${scale})`
}

updateScale();
window.addEventListener('resize', updateScale);

const background = document.querySelector('.bg-img');

function createColorButtons(squareIndex) {
    const numpadTexts = ['Numpad 4', 'Numpad 5', 'Numpad 6', 'Numpad 1', 'Numpad 2', 'Numpad 3'];
    return colors.map((color, i) => {
        return `
            <div class="color-container">
                <img class="color ${color}${squareIndex}" src="Img/memory/${color}.png" alt="${color}">
                <span class="numpad-text">${numpadTexts[i]}</span>
            </div>
        `;
    }).join('');
}

function createSquares() {
    const squaresContainer = document.getElementById('squares-container');
    for (let i = 1; i <= numberOfSquares; i++) {
        const squareHTML = `
            <div class="square sq${i}">
                <div class="color-bt">
                    ${createColorButtons(i)}
                </div>
            </div>
        `;
        squaresContainer.innerHTML += squareHTML;
    }
}

createSquares();

function setColor(square, color) {
    square.style.backgroundImage = `url(Img/memory/${color}.png)`;
}

function resetAll() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundImage = `url(Img/memory/black.png)`;
    });
}

function handleColorButtonClick(event) {
    const colorClass = event.target.classList[1];
    const color = colorClass.replace(/\d+$/, '');
    const index = parseInt(colorClass.match(/\d+$/)[0], 10);
    const square = document.querySelector(`.sq${index}`);
    setColor(square, color);
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('color')) {
        handleColorButtonClick(event);
    }
});

document.querySelector('.bt-div').addEventListener('click', resetAll);


// Asignar el cuadrado sobre el que está el mouse
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseenter', function() {
        hoveredSquare = square;
    });
    square.addEventListener('mouseleave', function() {
        hoveredSquare = null;
    });
});

// Manejar el teclado para asignar colores
document.addEventListener('keydown', function(event) {
    if (hoveredSquare) {
        switch (event.code) {
            case 'Numpad4':
                setColor(hoveredSquare, 'blue');
                break;
            case 'Numpad5':
                setColor(hoveredSquare, 'purple');
                break;
            case 'Numpad6':
                setColor(hoveredSquare, 'pink');
                break;
            case 'Numpad1':
                setColor(hoveredSquare, 'orange');
                break;
            case 'Numpad2':
                setColor(hoveredSquare, 'green');
                break;
            case 'Numpad3':
                setColor(hoveredSquare, 'red');
                break;
        }
    }

    // Opción de reset con la barra espaciadora
    if (event.code === 'Space') {
        resetAll();
    }
});

const closeButton = document.getElementById('close-button');
const guide = document.querySelector('.guide');
const bgImg = document.querySelector('.bg-img');

// Función para cambiar el scale
function changeScale() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    console.log(screenWidth, screenHeight);

    // Verifica si la pantalla está dentro del rango del @media query
    if (screenWidth >= 1280 && screenWidth <= 1280 && screenHeight >= 1024 && screenHeight <= 1024) {
        bgImg.style.scale = '1.45'; // Cambia el scale a 1 (puedes cambiar a otro valor)
        bgImg.style.left = '9%';
        bgImg.style.top = '-1.5%';
    }
}

// Escucha el evento click en el botón close-button
closeButton.addEventListener('click', () => {
    guide.classList.add('hidden');
    changeScale(); // Llama a la función para cambiar el scale si se cumplen las condiciones
});