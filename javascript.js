const container = document.querySelector('.container');
const slider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');

const colorButton = document.getElementById('button-color');
const rainbowButton = document.getElementById('button-rainbow');
const eraserButton = document.getElementById('button-eraser');
const clearButton = document.getElementById('button-clear');

let percentageColored = [5]
let totalDivs = slider.value * slider.value;
let coloredDivs = 0;

clearButton.onclick = () => addGrid(slider.value);

function clearGrid() {
    container.innerHTML = ''; // Remove existing div
}

slider.addEventListener('click', () => {
    sizeValue.textContent = `${slider.value} X ${slider.value}`
    addGrid(slider.value)
});

function addGrid(valueSlider) {
    clearGrid();

    for (i = 0; i < (valueSlider * valueSlider); i++) {
        const div = document.createElement('div');
        div.classList = 'grid'

        div.style.width = `${500 / valueSlider}px`;
        div.style.height = `${500 / valueSlider}px`;

        div.addEventListener('mouseover', changeColor)
        div.addEventListener('mousedown', changeColor)

        container.appendChild(div)
    }
}



let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e) {

    if (e.type === 'mouseover' && !mouseDown) return

    e.target.style.backgroundColor = 'black'

    checkPercentage();

}

function checkPercentage() {
    const gridDivs = document.querySelectorAll('.grid'); // Select all grid divs
    const totalDivs = slider.value * slider.value; // Total number of divs in the grid
    let coloredDivs = 0; // Reset the count of colored divs

    gridDivs.forEach(div => {
        // Compare color, make sure this matches the default color in your CSS
        if (div.style.backgroundColor !== '' && div.style.backgroundColor !== 'rgb(31, 41, 55)') {
            coloredDivs++; // Increment count if the color is different from default
        }
    });

    percentageColored = [(coloredDivs / totalDivs) * 100];
    percentageColored = [Math.round(percentageColored)]
    console.log(`Colored Divs: ${coloredDivs}/${totalDivs}, Percentage: ${percentageColored}%`);
}

addGrid(slider.value);

// D3.js

// d3.select('svg')
//     .selectAll('circle')
//     .data(percentageColored)
//     .join('circle')
//     .attr('cx', (d, i) => (i + 1) * 50)
//     .attr('cy', 50)
//     .attr('r', (d, i) => d * 5);





