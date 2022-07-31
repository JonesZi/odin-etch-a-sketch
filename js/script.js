// Building the grid

const container = document.querySelector(".container");

function getSquaresbySide () {
    let squaresPerSide = Math.min(50,parseInt(prompt("How many squares? (Max. 50)")));
    return squaresPerSide;
};

function createDivs(squaresPerSide) {
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
    createDivs(squaresPerSide);
};

document.querySelector(".btn").addEventListener("click", buildGrid);

// Hover Effect


function changeBackground(e) {
    if (!e.target.classList.contains("divs")) return;
    e.target.classList.add("hover");
};

document.addEventListener("mouseover", changeBackground);

