const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let h=document.getElementsByClassName("hove")
let rainbow=document.querySelector("#rainbow")
const header2=document.createElement('h1');
let upgrade=document.querySelector('#upgrade')
let gridSize=16;


//Takes (rows, columns) input and makes a grid
function makeGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    let sketchBoxes = document.querySelectorAll('.cell');
    if (sketchBoxes) reset(sketchBoxes);

    let totalSquares=gridSize*gridSize;
    if(totalSquares>=10&&totalSquares<=10000){
    //Creates rows
    for (r = 0; r <totalSquares; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "cell";
    };
}else if(totalSquares<=9){
    alert('Number is too low, Please try again')
}

};

function Colours() {
    let sketchBoxes = document.querySelectorAll('.cell');
    sketchBoxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if(rainbow.checked===true){
              let randomColor=  Math.floor(Math.random()*16777215).toString(16);
              box.style.backgroundColor= "#" + randomColor;
            }
            else{
            box.style.backgroundColor = 'black'
            }
        })    
    })
}
function reset(boxes){
    boxes.forEach((box)=>{
        box.remove();
    })
}
function resizeGrid(){
    let gridSize = prompt("Please provide a new Grid Size");
    makeGrid(gridSize);
    Colours()
     }


     makeGrid(gridSize);

//  function hoverChange(colorNum){
//     for (i = 0; i < rows.length; i++) {
//         for (j = 0; j < colorNum; j++) {
//             let newCell = document.createElement("div");
//             rows[j].appendChild(newCell).className = "cell";
//             rows[j].appendChild(newCell).className = "hove";
//         };

//     };

// }