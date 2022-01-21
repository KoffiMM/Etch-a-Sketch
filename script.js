const container = document.querySelector('#container');
let makeRows = document.getElementsByClassName("gridRow");
let makeColumns = document.getElementsByClassName("cell");

function createGrid(){

    createRows(16);
    createColumns(16);
}

function createRows(rows){

    for(let i=0; i<makeRows; i++){
        const row=document.createElement('div');
        container.appendChild(row).className('.gridRow');
    }

}
function createColumns(columns){
    for(let j=0; i<makeColumns; j++){
        const column=document.createElement('div');
        rows[j].appendChild(column).className('.cell');
    }
}