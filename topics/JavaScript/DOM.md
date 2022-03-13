#DOM

**DOM** - fa szerkezetu ábra a weboldal tartalmáról kulonbozo nodes(csomók)-al. A felsobb elem a **parent** és a benne levo elemek pedig a **children** a mellettuk levok pedig a sibling. 
```
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```
**Selektorok** - A fenti ábránál a display-t 4 féleképpen lehet elérni selektoron keresztul

+ div.display
+ .display
+ #container > .display
+ div#container > div.display

Vagy használhatunk **relational selektorokat** is 

```
const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display
```

**Query Selectors** Kétféle alap query selector létezik. 
  + **document.querySelector(selector)** - A selector elso találatát adja vissza.
  + **document.querySelectorAll(selector)** - egy "nodelist"-et advissza a selector osszes találatáról. A nodelistet array-á az Array.from() parancssal lehetséges. 
 
**document.createElement(tag_név,[opciók])** - Új tagot hoz létre és opcionálisan paraméterekkel ellátva.

**parentNode.appendChild(childNode)** - Parent nodehoz ad hozzá egy child nodet
**parentNode.insertBefore(newNode, referenceNode)** - Új node-t ad hozzá a parentNodehoz a referenceNode elé.

**parentNode.removeChild(child)** - a child-t eltávolítja a parentNode-bol és a childet returnoli.

**Elemek megváltoztatása** - Amint kiválasztottunk egy element akkor megváltoztathatjuk annak elemnek a tulajdonságait. pl. **elem.style.color = "szín neve"**, **elem.style.cssText = "color: blue; background white";** - CSS szabályok beszúrása ez ugyanúgy lehetséges a **elem.setAttríbutes("style", "color: blue; background: white")** parancssal.

**Attributumok megváltoztatása**
**elem.setAttrubute("attributum", "érték");** - Ha attributum létezik akkor megávlotztatja az attributumot ha nem akkor új attributumot hoz létre
**elem.getAttribute("attributum")** - Az attributum értékét adja vissza
**elem.removeAttribute("attributum")** - Az attributum eltávolítása

**Dolgozás classokkal**
**elem.classList.add("class_név)** - Új class beszúrása az elemen belul.
**elem.classList.remove("class_név)** - Class eltávolítása
**elem.classList.toggle("active");** - Ha az elemnek nincs ilyen classja akkor hozzáad ha van akkor eltávolítja.

**elem.textContent = "Szoveg"** - A szoveg node-t hozzáadja az elemhez.

##Events (események)

Eseményeket háromféleképpen lehet egy elemhez illeszteni:

1. <button onclick="alert('Hello World')">Click Me</button> - Nem ideális mivel a HTMl-t elárasszuk JavaScripttel és minden elemhez kulon be kell illesztenunk a kódot. 
2.
```
<!-- the HTML file -->
<button id="btn">Click Me</button>

// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
```
Itt a JavaScript egy kulon fájlban van itt a probléma még fennmaradt hogy egy elemnek csak egy "onclick" eseménye van.
3. 
```
<!-- the HTML file -->
<button id="btn">Click Me Too</button>

// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
```

   
