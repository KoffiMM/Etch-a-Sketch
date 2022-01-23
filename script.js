const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let h=document.getElementsByClassName("hove")
let rainbow=document.querySelector("#rainbow")
const header2=document.createElement('h1');


header2.classList.add('header2');
header2.style.color='red';
header2.textContent=`Etch-A-Sketch`
makeGrid(16);

//Takes (rows, columns) input and makes a grid
function makeGrid(Num) {

    //Creates rows
    for (r = 0; r < Num; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
    //creates columns
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < Num; j++) {
             let newCell = document.createElement("div");
             rows[j].appendChild(newCell).className = "cell";
    }
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



//  function hoverChange(colorNum){
//     for (i = 0; i < rows.length; i++) {
//         for (j = 0; j < colorNum; j++) {
//             let newCell = document.createElement("div");
//             rows[j].appendChild(newCell).className = "cell";
//             rows[j].appendChild(newCell).className = "hove";
//         };

//     };

// }