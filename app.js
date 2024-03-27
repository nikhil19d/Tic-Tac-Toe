let start = document.querySelector("button");
let title = document.querySelector("h1");
let details = document.querySelector(".details");
let enter = document.querySelector(".enter");
let text = document.querySelector(".text");
let icon = document.querySelector(".icon");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let exit = document.querySelector(".exit");
let display = document.querySelector(".display");
let pl2 = document.querySelector("#pl2");
let pl1 = document.querySelector("#pl1");
let wish = document.querySelector("#wish");
let win = document.querySelector(".win");
let windis = document.querySelector("#winner");
let profile1 = document.querySelector(".profile1")
let profile2 = document.querySelector(".profile2")
let restart = document.querySelector(".restart");

start.addEventListener('click', () => {
    start.classList.add("hidden");
    title.classList.add("hidden");
    details.classList.remove("hidden")

})
enter.addEventListener('click', () => {
    text.classList.add("hidden");
    icon.classList.add("hidden");
    document.getElementById("con").setAttribute("class", "container");
    details.classList.add("hidden");
    display.classList.remove("hidden");
    pl1.classList.remove("hidden")
    pl2.classList.remove("hidden")
    reset.classList.remove("hidden");
    exit.classList.remove("hidden");
    let play1 = document.getElementsByClassName("pl1")[0].value;
    // let play1 = document.getElementById("pla1").value;
    let play2 = document.getElementsByClassName("pl2")[0].value;
    // let play2 = document.getElementById("pla2").value;
    console.log(play1, play2);
    let pro1 = document.querySelector(".pro1")
    pro1.innerText = `${play1}`
    let pro2 = document.querySelector(".pro2")
    pro2.innerText = `${play2}`
    turn == true;
    enabledbtn();
})

reset.addEventListener('click', () => {
    turn == true;
    enabledbtn();

})

exit.addEventListener('click', () => {
    document.getElementById("con").setAttribute("class", "hidden");
    icon.classList.remove("hidden");
    text.classList.remove("hidden");
    reset.classList.add("hidden");
    exit.classList.add("hidden");
    pl1.setAttribute("class", "hidden")
    pl2.setAttribute("class", "hidden")
    title.classList.remove("hidden");
    start.classList.remove("hidden");
    display.classList.add("hidden");
    wish.setAttribute("class", "hidden");
    turn == true;
    enabledbtn();
})

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let turn = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerHTML = '<i class="fa-solid fa-xmark" style="color: black;"></i>'
            turn = false;
        }
        else {
            box.innerHTML = '<i class="fa-solid fa-o" style="color: black;"></i>';
            turn = true;
        }
        box.disabled = true;
        winner();
    })
});

const disabledbtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}
const enabledbtn = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = '';
    })
}

const winner = () => {
    winPatterns.forEach(pattern => {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                display.classList.add("hidden");
                wish.setAttribute("class", "wish");
                let attr1 = document.querySelector("i");
                attr1 = attr1.getAttribute("class");
                attr1 = '<i class="' + attr1 + '" style="color: black;"></i>';
                console.log(attr1);
                let attr2 = document.querySelector("#i");
                attr2 = attr2.getAttribute("class");
                attr2 = '<i class="' + attr2 + '" style="color: black;"></i>';
                console.log(attr2);
                if (pos1 === attr1) {
                    windis.setAttribute("class", "winner");
                    restart.setAttribute("class", "restart");
                    let play1 = document.getElementsByClassName("pl1")[0].value;
                    document.querySelector(".winName").innerText = `${play1}`;
                    
                }
                if (pos1 === attr2) {
                    let play2 = document.getElementsByClassName("pl2")[0].value;
                    document.querySelector(".winName").innerText = `${play2}`;
                    windis.setAttribute("class", "winner");
                    restart.setAttribute("class", "restart");
                }
                disabledbtn();
                turn = true;
            }
        }
    })
}
restart.addEventListener('click', () => {
    wish.setAttribute("class", "hidden");
    windis.setAttribute("class", "hidden");
    document.getElementById("con").setAttribute("class", "hidden");
    restart.setAttribute("class", "hidden");
    start.classList.remove("hidden");
    title.classList.remove("hidden");
    text.classList.remove("hidden");
    icon.classList.remove("hidden");
})