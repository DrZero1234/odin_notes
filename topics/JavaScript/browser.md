# Browser parancsok

## breakpoints

+ **line-of-code** - Akkor hasznos ha tudjuk, hogy a kód melyik részét kell megvizsgálnunk.
+ **conditional line-of-code** - Ha tudjuk a kód mely részét szeretnénk megvizsgálni de csak egy feltétel beteljesedése után álljon az le. Sorszám -> Jobbklikk -> Feltétel.
+ **DOM** - Ha a DOM node vagy annak children elemei megválzonak. HTML elem -> Jobbklikk -> Break on. -> Feltétel. 
  **DOM feltételek**: 
   + **Subtree modification** - A mostani node childrene eltávolítják vagy újat adnak hozzá. 
   + **Attribute modification** - A mostani node attrubutumainak változtatása esetén. 
   + **Node Removal** - A mostani node eltávolítása esetén mukodik. 
+ **XHR** - Ha egy request URL egy bizonyos stringet tartalmaz, ez a XHR send() sorában állítja meg a kodot. Ez akkor is hasznos lehet ha téves URL-t requestelunk és jelezni azt. Sources -> XHR/fetch breakpoints -> Add breakpoint -> A URL beírása
+ **Event Listener** - Sources -> Event Listener Breakpoints -> Breakpoint típusa. 
+ **Exception** - Az Exception helyén állítja le a kódot. Sources -> Pause on Exceptions
+ **Function** - debug(fuggvény név)
