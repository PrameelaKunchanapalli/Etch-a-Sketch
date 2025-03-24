let selectedColor = "#000000";

document.getElementById("color-picker").addEventListener("input", (event) => {
    selectedColor = event.target.value;
});

document.getElementById("set-grid").addEventListener("click", setGridSize);
document.getElementById("clear-grid").addEventListener("click", clearGrid);
    selectedColor = document.getElementById("color-picker").value;
    document.body.style.backgroundImage = "";


function createGrid(size) {
    const container = document.getElementById("grid-container");
    container.innerHTML = ""; //to clear grid
    const squareSize = 400 / size + "px"; 
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = squareSize;
        square.style.height = squareSize;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = selectedColor;
        });

        container.appendChild(square);
    }
}

function setGridSize() {
    let size = prompt("Enter grid size (max 50):");
    size = parseInt(size);

    if (!size || size < 1 || size > 50) {
        alert("Please enter a number between 1 and 50.");
        return;
    }

    createGrid(size);
}

function clearGrid() {
    document.querySelectorAll(".grid-square").forEach(square => {
        square.style.backgroundColor = "";
    });
}

createGrid(16); 
