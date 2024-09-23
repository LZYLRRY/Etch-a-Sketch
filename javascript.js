const container = document.querySelector('.container');

function addGrid() {
    for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList = 'grid'
   
        container.appendChild(div)
    }
}

addGrid()