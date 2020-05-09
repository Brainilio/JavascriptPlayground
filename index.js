
let boxOne = document.querySelector('.box1');
let boxLong = document.querySelector('.boxLong')
let boxOneWidthProp = 300;

// boxOne.addEventListener('mouseover', (e) => {
//     console.log("X-Coordinate: ", e.clientX, "Y-Coordinate: ");
//     console.log(boxOne)
//     let coor = "Coordinates: (" + e.clientX + ", " + e.clientY + ")";
//     document.body.innerHTML = coor;
// })


let documentPage = document.getElementsByTagName('body')[0];
console.log(documentPage)


boxOne.addEventListener('click', () => {
    if (boxOneWidthProp == 100) {
        console.log("Growing to 300.")
        boxOneWidthProp = 300;
        boxOne.style.width = `${boxOneWidthProp}px`
        boxOne.style.height = `300px`
        boxOne.style.transition = `0.8s ease`
    }
    else if (boxOneWidthProp == 300) {
        console.log("Shrinking to 100")
        boxOneWidthProp = 100;
        boxOne.style.width = `${boxOneWidthProp}px`

    }
})

window.addEventListener('dragover', (e) => {
    let div = document.createElement("div");
    div.classList.add('cursorDiv')
    let text = document.createTextNode('Cursor.');
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.background = "red";
    div.style.display = "block";
    div.style.position = "absolute";
    div.style.top = `${e.clientY}px`;
    div.style.left = `${e.clientX}px`;

    div.appendChild(text);
    documentPage.appendChild(div);
    console.log(div);
})
