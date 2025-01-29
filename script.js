const container = document.querySelector(".container");
const defaultSize = 16;
let inputSize = 16;
let height = 0;
const gridSize = document.querySelector(".gridSize");
const reset = document.querySelector(".reset");

gridSize.addEventListener("click", newGrid);

reset.addEventListener("click", () => {
    removeGrid();
    grid(defaultSize);
});

function newGrid() {
    inputSize = Number(prompt("Type a number between 1 - 100", 16));
    while (inputSize < 1 || inputSize > 100) {
        inputSize = Number(prompt("Type a number between 1 - 100", 16));
        return
    }
    removeGrid();
    grid(inputSize);
}

function grid(size) {
    height = 400 / size - 2;
    for(let i = 0; i < (size **2); i++) {
        const div = document.createElement("div");
        div.className = "grid"
        div.style.height = `${height}px`;
        div.style.width = `${height}px`;
        div.style.border = "1px solid black";
        container.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.classList.add("newColour");
        });
    };
}

function removeGrid() {
    const list = document.querySelectorAll(".grid");
    list.forEach(div => {
        container.removeChild(div);
    });
}

grid(defaultSize);
