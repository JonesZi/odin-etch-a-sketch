// Variables

const container = document.querySelector(".container");
document.querySelector(".btn").addEventListener("click", buildGrid);


// Functions
function getSquaresbySide () {
    let squaresPerSide = Math.min(50,parseInt(prompt("How many squares? (Max. 50)")));
    return squaresPerSide;
};

function createGrid(squaresPerSide) {
    const numberOfDivs = squaresPerSide * squaresPerSide;
    const width = 640 / squaresPerSide;
    for (let i = 0; i < numberOfDivs; i++) {
        let box = document.createElement("div");
        box.classList.add("divs");
        box.style.cssText = `width: ${width}px; height:${width}px;`;
        container.appendChild(box);
    };
};

function buildGrid() {
    container.replaceChildren();
    squaresPerSide = getSquaresbySide();
    createGrid(squaresPerSide);
};
