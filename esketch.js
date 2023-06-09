const container = document.getElementById('container');
makeGrid(32);

function makeGrid(numOfCells) {
  container.style.gridTemplateColumns = `repeat(${numOfCells}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numOfCells}, 1fr)`;

  const containerWidth = container.offsetWidth;
  const squareSize = (containerWidth - 2 * numOfCells) / numOfCells;

  container.innerHTML = '';

  for (let i = 0; i < numOfCells * numOfCells; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);

    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = getRandomColor();
    }
    );
  }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click',clear);

function clear(){
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'black';
    squares[i].style.borderColor = '#000';

    }
}

const resizeButton = document.getElementById('resizeButton');
resizeButton.addEventListener('click', resize);

function resize(){
    const newSize = parseInt(document.getElementById('resizeGrid').value);
  if (newSize >= 1 && newSize <= 100) {
    gridSize = newSize;
    makeGrid(gridSize);
  } else {
    alert('Please enter a value between 1 and 100 for the grid size.');
  }
}
