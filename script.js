console.log('Hello World');

const elContainer = document.querySelector(".eascontainer");
console.log(elContainer);

function createGrid() {
    let myHTML = '';
    for(let i = 0;i < 256; i++){
        myHTML += '<div class="eascell"></div>'
    }
    elContainer.innerHTML=myHTML;
}

createGrid();

//CHANGE THIS CLASSNAME
const eascells = document.querySelectorAll(".eascell");

eascells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add("turnblack");
    });
});

// eascells.forEach((eascell) => {
//     eascells.addEventListener("mouseover", function() {
//         eascells.classList.add("turnblack");
//     });
// });


// eascells.forEach((eascell) => {
//     eascell.addEventListener('click',() => {
//         console.log('turns black');
//     });
// });

// eascell.classList.add('turnblack');

// eascell.addEventListener('mouseenter', ()=>{
//     eascell.classList.add('turn-black');
// })
