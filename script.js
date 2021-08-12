console.log('Hello World');

let countColumns = getComputedStyle(document.documentElement())
let countCells = 256;
const eascells = document.querySelectorAll(".eascell");
const elContainer = document.querySelector(".eascontainer");
const elCountColumns = document.querySelector("#count-columns");
console.log(elCountColumns);

//Creates grid manually.
function createGrid() {
    let myHTML = '';
    for(let i = 0;i < countCells; i++){
        myHTML += '<div class="eascell"></div>'
    }
    elContainer.innerHTML=myHTML;
}

//Adds event listener to add class, turning cell color to black
eascells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add("turnblack");
    });
});

elCountColumns.addEventListener('change', () => {
    console.log('Changed');
    countCells = elCountColumns.value**2;
    createGrid();
})

createGrid();

