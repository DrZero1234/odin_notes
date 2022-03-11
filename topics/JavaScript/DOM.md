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
  
   
