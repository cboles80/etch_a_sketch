console.log('Hello World - v','1a');

// Create a styles variable that holds the document styles.
var styles = getComputedStyle(document.documentElement);


let eascells = document.querySelectorAll(".eascell");
console.log('eascells', eascells);
const elContainer = document.querySelector(".eascontainer");
const elCountColumns = document.querySelector("#count-columns");
console.log(elCountColumns);
let countCols = 16;
countCols = parseInt(elCountColumns.value);
let countCells = countCols**2;

function createGridEventListener() {
    eascells.forEach(cell => {
        cell.addEventListener('mouseover', handleMouseOver);
    });
    }

//Creates grid manually.
function createGrid() {
    console.log('top createGrid');
    let myHTML = '';
    for(let i = 0;i < countCells; i++){
        // myHTML += '<div class="eascell" id="' + '_' + i + '"></div>';
        myHTML += `<div class="eascell" id="_${i}"></div>`;
    }
    elContainer.innerHTML=myHTML;
    eascells = document.querySelectorAll(".eascell");
console.log('eascells', eascells);
    createGridEventListener();
    console.log('bottom createGrid');
}

function handleMouseOver(e) {
    console.log('top handleMouseOver');
    // console.log(e);
    let myCell = document.getElementById(e.target.id);
    myCell.classList.add("turnblack");
}

function handleSubmit(e){
    e.preventDefault();
    console.log('top handleSubmit');
    console.log('keyup-submit');
    console.log(e);
    console.log('----->',e.target.outerText);
    if (elCountColumns.value > 100 || elCountColumns.value < 16) {
        console.log('early return');
        alert('Please enter a number between 16 and 100');
        return; // ********** EARLY RETURN
    }
    if (e.key === 'Enter' || e.target.outerText === 'Submit'){
        console.log(e.target.type);
        countCols = parseInt(elCountColumns.value);
        document.documentElement.style.setProperty('--eascell', countCols);
        countCells = countCols**2;
        console.log(countCells);
        createGrid();
        console.log('after create grid');
        return;
    }
}

function addEventListeners() {
    console.log('top of addEventListeners');
    
    elCountColumns.addEventListener('keyup', handleSubmit);
    document.querySelector('button').addEventListener('click', handleSubmit);
}

createGrid();
addEventListeners();

console.log('bottom of file');