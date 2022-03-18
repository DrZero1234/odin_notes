const container = document.querySelector("#container");

const buttons = container.querySelectorAll("button");
console.log(buttons)

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        alert(button.id);
    })
})