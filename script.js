console.log('Hello World');

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
    console.log('top handleSubmit');
    console.log('keyup-submit');
    console.log(e);
    // e.preventDefault();
    // if (e.key === 'Enter'){
    //     countCols = parseInt(elCountColumns.value);
    //     document.documentElement.style.setProperty('--eascell', countCols);
    //     countCells = countCols**2;
    //     console.log(countCells);
    //     createGrid();
    // }
}
createGrid();

elCountColumns.addEventListener('change', () => {
    console.log('Changed');
    countCols = parseInt(elCountColumns.value);
    console.log(typeof countCols);
    document.documentElement.style.setProperty('--eascell', countCols);
    countCells = countCols**2;
    console.log(countCells);
    createGrid();
})

// elCountColumns.addEventListener('keyup', handleSubmit);
elCountColumns.addEventListener('submit', handleSubmit);

console.log('bottom of file');