console.log('Hello World');

const elContainer = document.querySelector(".eascontainer");
console.log(elContainer);

//Creates 16 X 16 grid manually.
function createGrid() {
    let myHTML = '';
    for(let i = 0;i < 256; i++){
        myHTML += '<div class="eascell"></div>'
    }
    elContainer.innerHTML=myHTML;
}

createGrid();

//(CHANGE THIS CLASSNAME)
const eascells = document.querySelectorAll(".eascell");

//Adds event listener to add class, turning cell color to black
eascells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add("turnblack");
    });
});