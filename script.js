// Create a styles variable that holds the document styles.
var styles = getComputedStyle(document.documentElement);
let bkgColor = "#FFFFFF";
const cb = document.querySelector('.colors');


let eascells = document.querySelectorAll(".eascell");
const elContainer = document.querySelector(".eascontainer");
const elCountColumns = document.querySelector("#count-columns");
let countCols = 16;
let countCells = countCols**2;

function createGridEventListener() {
    eascells.forEach(cell => {
        cell.addEventListener('mouseover', handleMouseOver);
    });
}

//Creates grid manually.
function createGrid() {
    let myHTML = '';
    for(let i = 0;i < countCells; i++){
        myHTML += `<div class="eascell" id="_${i}"></div>`;
    }
    elContainer.innerHTML=myHTML;
    eascells = document.querySelectorAll(".eascell");
    createGridEventListener();
}

function handleMouseOver(e) {
    let myCell = document.getElementById(e.target.id);
    let myColor = "000";
    if (cb.checked === true) {       
        myColor = Math.floor(Math.random()*16777215).toString(16);
    }
    myCell.style.backgroundColor = "#" + myColor;
}

function handleClear() {
    eascells.forEach(square => { 
        square.removeAttribute('style');
    });
}

function handleSubmit(e){
    e.preventDefault();
    if (elCountColumns.value > 100) {
        console.log('early return');
        alert('Please enter a number between 16 and 100');
        return; // ********** EARLY RETURN
    }
    if (e.key === 'Enter' || e.target.outerText === 'Submit'){
        countCols = parseInt(elCountColumns.value);
        document.documentElement.style.setProperty('--eascell', countCols);
        countCells = countCols**2;
        createGrid();
        return;
    }
}

function addEventListeners() {  
    elCountColumns.addEventListener('keyup', handleSubmit);
    document.querySelector('.colrow').addEventListener('click', handleSubmit);
    document.querySelector('.clear').addEventListener('click', handleClear);
    document.querySelector('.colors').addEventListener('change', createGridEventListener);
}   

createGrid();
addEventListeners();