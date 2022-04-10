const applyBox = document.querySelectorAll(".green");

const changeBgColor = () => {
    for (let i = 0; i < applyBox.length; i++) {
        applyBox[i].classList.remove("green-box");
    }
}

for (let j = 0; j < applyBox.length; j++) {
    let el = applyBox[j];
    el.addEventListener("click", () => {
        changeBgColor();
        el.classList.add("green-box")
    })
}
 
