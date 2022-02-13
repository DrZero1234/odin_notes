# CSS

## Selektorok

Ha a két bizonyos id-s vagy class-es tagnak ugyanazok a stílusértékeit akkor azokat egy vesszovel elválasztott listába írhatjuk:
```

.read,
.unread{
    color: white;
    background-color: black
}

.read {
    /* Sajátos stílusértékek */
}

.unread {
    /* Sajátos stílusértékek */
}
```
Chainelt selektorok 

```
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```
Ha csak egy olyan subsection class értéket szeretnenk kiválasztani mely tartalmazza a headert akkor azt 2 érték chainelésével tehetjuk meg

```
.section.header {
    color: red
}
```

## Kombinátor

Csak akkor fogja kiválasztani az utolsó elemet ha annak van egy elotte lévo parent eleme. 

HTML
```

<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
    <div class="contents"> <!-- C -->
    </div>
  </div>
</div>

<div class="contents"></div> <!-- D -->
```
CSS
```
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
```
Itt a B és a C lesz kiválasztva, 

## CSS alapértékek

    + color és background-color - A szín illetve háttérszín megadása
    + font-family: Betutípus pl. "Times New Roman" vagy "sans-serif"
    + font-size: Betuméret pixelekben pl. 22px
    + font-weight: Lehet szám 1-tol 1000-ig vagy kulcsszó pl. bold 
    + text-align: A szoveg vizszintes pozícionálása kulcsszóval pl. center
    + Image width és height: Kép szélessége, hosszúsága pixelben, százalékban vagy auto értékkel 

## Selectorok priorutási sorrendje

    1. ID selektor
    2. Class selektor - Minél tobb class annál elonyosebb a tobbi classhoz képest, ha konfliktus van.
    3. Típus selektor

## Orokles (Inheritance)

A parent stilusértékei érvényesek a children tagekre kivéve ha a children tageket kulon írjuk. 

```
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>

/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue
}
```

## Box Model

Minden egyes dolog a weboldalon egy négyzet alakú doboz

![Page boxes](../img/boxes.png)

A dobozok nagyságát és kozte lévo helyet tobbféleképpen is lehet manipulálni.:
  + padding - A doboz széle és a benne lévo tartalom kozti helyet határozza meg
  + margin - A doboz és a mellette lévo tartalom kozti helyet határozza meg
  + border - A margin és a padding kozé ad helyet.
  
![box_model](../img/box-model.png)



