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
Itt a B és a C lesz kiválasztva 
