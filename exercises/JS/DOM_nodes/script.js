const container = document.querySelector("#container");
console.log(container)

const h1 = document.createElement("h1")
h1.textContent = "I´m in div";

const div_p = document.createElement("p")
div_p.textContent = "Me too"

const red_para = document.createElement("p");
red_para.style.color = "red";
red_para.textContent = "Hey i´m red"
container.appendChild(red_para);

const blue_h = document.createElement("h3");
blue_h.style.color = "blue";
blue_h.textContent = "I´m blue h3";
container.appendChild(blue_h);

const div = document.createElement("div");
div.setAttribute("style", "border-style: solid; border-color: black; background-color: pink")
div.appendChild(h1);
div.appendChild(div_p);
container.appendChild(div);













