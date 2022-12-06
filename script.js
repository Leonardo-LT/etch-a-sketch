const grid = document.getElementById("grid")
const slider = document.getElementById("gridSize")
const gridSizeValue = document.getElementById("gridSizeValue")
const eraseButton = document.getElementById("erase")
const colorPicker = document.getElementById("colorPicker")
const clear = document.getElementById("clear")

let gridSize = 32
gridSizeValue.textContent = gridSize
let currentColor = "black"

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize ** 2; i++) {
        let div = document.createElement("div")
        div.classList.add("quadret")

        let size = 600 / gridSize
        div.style.cssText = `width: ${size}px; height: ${size}px;`

        grid.appendChild(div)
    }
}

const quadret = document.getElementsByClassName("quadret")

const changeDivColorOnClick = (color) => {
    for (let i = 0; i < quadret.length; i++) {
        quadret[i].addEventListener("mouseover", () =>{
            quadret[i].style.backgroundColor = color
        })
    }
}

const draw = (color) => {
    changeDivColorOnClick(color)
}

const erase = () => {
    changeDivColorOnClick("white")
}

const deleteDivs = () => {
    divs = Array.from(quadret)
    for (let i = 0; i < divs.length; i++) {
        divs[i].remove()
    }
}

slider.addEventListener("change", (e) =>{
    let exponent= slider.value
    gridSize = 4 ** exponent
    deleteDivs()
    createGrid(gridSize)
    gridSizeValue.textContent = gridSize
    draw(currentColor)
})

colorPicker.addEventListener("change", (e) =>{
    currentColor = colorPicker.value
    draw(currentColor)
})

eraseButton.addEventListener("click" , ()  =>{
    erase()
})

clear.addEventListener("click", () => {
    for (let i = 0; i < quadret.length; i++) {
        const div = quadret[i];
        div.style.backgroundColor = "white"
    }
    draw(currentColor)
})

createGrid(gridSize)
draw(currentColor)