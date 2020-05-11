
// let boxOne = document.querySelector('.box1');
// let boxLong = document.querySelector('.boxLong')
// let boxOneWidthProp = 300;

// boxOne.addEventListener('mouseover', (e) => {
//     console.log("X-Coordinate: ", e.clientX, "Y-Coordinate: ");
//     console.log(boxOne)
//     let coor = "Coordinates: (" + e.clientX + ", " + e.clientY + ")";
//     document.body.innerHTML = coor;
// })

// window.addEventListener('pointerover', (e) => {
//     boxOne.style.left = `${e.pageX - 10}px`
//     boxOne.style.top = `${e.pageY - 10}px`
//     console.log(e);

// })

// let documentPage = document.getElementsByTagName('body')[0];


// boxOne.addEventListener('click', () => {
//     if (boxOneWidthProp == 100) {
//         console.log("Growing to 300.")
//         boxOneWidthProp = 300;
//         boxOne.style.width = `${boxOneWidthProp}px`
//         boxOne.style.height = `300px`
//         boxOne.style.transition = `0.8s ease`
//     }
//     else if (boxOneWidthProp == 300) {
//         console.log("Shrinking to 100")
//         boxOneWidthProp = 100;
//         boxOne.style.width = `${boxOneWidthProp}px`

//     }
// })

// console.log(boxOne.getClientRects())

// window.addEventListener('mouseover', (e) => {
//     let div = document.createElement("div");
//     div.classList.add('cursorDiv')
//     let text = document.createTextNode('Cursor.');
//     div.style.height = "100px";
//     div.style.width = "100px";
//     div.style.borderRadius = "50%"
//     div.style.background = "red";
//     div.style.display = "block";
//     div.style.position = "absolute";
//     div.style.top = `${e.clientY}px`;
//     div.style.left = `${e.clientX}px`;

//     documentPage.appendChild(div);
//     console.log(div);
// })


// Form handler


let submit = document.querySelector(".insert");
let formData = document.querySelector(".formData")
let ul = document.querySelector('.ulwrapper')
let delButton = document.getElementsByTagName('button')
let deleteButton = document.getElementsByClassName('deleteLi')
let allListItems = document.getElementsByTagName('li')


submit.addEventListener('click', () => {

    let li = document.createElement("li")
    li.classList.add('liwrapper')


    let button = document.createElement("button")
    button.classList.add('.deleteLi')
    button.innerHTML = `<span>X</span>`

    if (formData.value == "") {
        console.log("Value is empty!")
    }

    else {


        li.innerHTML = formData.value;

        ul.appendChild(li);

        formData.value = "";

        li.appendChild(button);

        console.log("Added new item!")



        for (let i = 0; i < allListItems.length; i++) {

            delButton[i + 1].addEventListener('click', () => {
                var parent = delButton[i + 1].parentElement



                parent.remove();


            })
        }


    }

})


for (let i = 0; i < allListItems.length; i++) {

    delButton[i + 1].addEventListener('click', () => {
        var parent = delButton[i + 1].parentElement

        parent.remove();

        // allListItems[i].remove();
    })
}





