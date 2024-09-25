const container = document.querySelector('.container');
const slider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');

slider.addEventListener('click', () => {
    sizeValue.textContent = `${slider.value} X ${slider.value}`
    addGrid(slider.value)
});

function addGrid(valueSlider) {
    container.innerHTML = ''; // Remove existing div

    for (i = 0; i < (valueSlider * valueSlider); i++) {
        const div = document.createElement('div');
        div.classList = 'grid'

        div.style.width = `${500 / valueSlider}px`;
        div.style.height = `${500 / valueSlider}px`;

        container.appendChild(div)
    }
}

addGrid(slider.value);