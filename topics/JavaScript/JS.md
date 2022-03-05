# JS Alapok

## Adattípusok

+ **Number** - Integer és Float számok, speciális értékeke az Infinity, -Infinity, NaN
+ **BigInt** - Nagyon nagy szám.
+ **String** - "" kotzi szoveges érték. Változókat ${válotzó} - módszerrel tuntetjuk fel mint szovegrészt amiknek `` kozott kell lennie.
+ **Boolean** - true és false értékek.
+ **null** - "semmi" "ismeretlen" "ures" értékeket képvisel. 
+ **undefined** - Egy érték nélkuli válozó alapértéke. 
+ **Object** - Kulcs: érték formában tárolja elemeit és {} kozé írjuk. 
+ **Symbol** - Egyedi azonosító az Objectek számára.  


## String parancsok

**str.length** - A string karaktereinek mennyisége pl "hello" - 5
**string levágása** - Háromféleképpen is lehetséges:

  + **str.slice(start,end)** - A levágott stringet egy új stringként adja vissza az end része nincs beleértve, ha a szám negatív akkor a string végétol számolja az indexet.
  + **str.substring(start,end)** -  Ugyanaz mint a slice csak nem fogad el negatív indexet.
  + **str.substr(start,end)** - Itt az end a levágott rész **hosszát** adja meg. 
  
 **string.replace(regi, uj)** - Egy stringen beluli elso értéket egy másikra cseréli. Az eredményt egy új stringben tárolja. Ha a regi értéket /érték/i kozé írjuk akkor nem veszi figyelembe a kis és nagybetuket. Ha az osszes regi értéket le szeretnénk cserélni akkor azt egy /érték/g kozé kell írni.  
 
 **string.toLowerCase(), string.toUpperCase()** - A stringet csupa kis illetve nagybetuvé alakítja. 
 **string.concat(elválasztó string2)** - Két stringet illeszt be egymás mellé az elválasztóval kozottuk. 
 **string.trim()** - A felesleges ures helyektol szabadítja meg a stringet. 
 **Karakter kiragadása** - Háromféleképpen lehetséges:
   + **charAt(pozíció)** - A pozícióban lévo karaktert ragadja meg.
   + **charCodeAt(pozíció)** - A pozícióban lévo karakter unicode értékét adja vissza.
   + **string[pozíció]** - Ugyanugy mukodik mint a charAt. 
   
## Logikai operátorok

  + **||(OR)** - Ha az egyik feltétel true akkor az OR értéke true egyébként false. Mindig az elso true értéket adja vissza balról jobbra. Ha az osszes érték false akkor az utolso értéket adja vissza. 
  + **&&(AND)** . Ha az osszes feltétel true akkor ad vissza true-t egyébként false. Az elso false értéket ad vissza ha az osszes érték true akkor az utolsó értéket adja vissza. Az AND elsobbséget élvez az OR-al szemben a végrehajtásnál. 
  + **!(NOT)**
  
**Switch** - Ha egy változó értékét szeretnénk megváltoztatni feltétel szerint vagy csupán printelni szeretnénk akkor erre alkalmas a switch parancs. Ha egy változónál  például koztes érték alapján szeretnénk eredményt változtatni azt egy switch(true)- n belul a változó értékét ellenorizve tehetjuk meg. Tobb case-t egymás alá is lehet írni és egy eredményt ad vissza ezen esetekként. Felépítése:

```
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}

```

**Ternary operator** - Feltételt tesztel és egy értéket ad vissza true illetve false esetén.  Felépítése
```
( condition ) ? run this code : run this code instead
```

**Fuggvények**

Alap paraméter - fuggvénynév (param = alapérték)
Arrow fuggvény - (param) => {kód} Az anonymus fuggvények rovidített változaza. Ha csak egy paraméter van akkor a zárójelre nincs szukség.  
változó ?? másik érték - Ha a változó értéke falsy vagy undefinde akkor a másik érték legyen érvényes.

 
Ha return-t írunk érték nélkul akkor az kilép a fuggvénybol. 


**Function Expression** - Létrehozása: **változó = fuggveny(){fuggvgény kódja}**. Egy fuggvény egy érték fuggetlenul hogy lett az létrehozva. **Egy Function expression akkor lesz létrehozva amikor a végrehajtás eléri és attol a pillanattól kezdve használható lesz.** Egy fuggvény Declaration a létrehozás elott is hívható. **Function Declaration egy kód blokkon ({}) belul látható kívulrol viszont nem.** 

**Call Stack** - LIFO-t (Last in First Out) - t használ. Amikor végrehajtunk egy scriptet az engine egy Global Execution Context-et hoz létre és a stack tetejére helyezi a scriptet. Ha egy fuggvény egy másik fuggvényt hív akkor az engine egy fuggvény execution context-et hoz létre a hívott fuggvényhez és a call stack tetejére helyezi azt. Ha a jelenlegi fuggvény végrehajtása befejezodott a call stackbol kitorlodik és folytatja a végrehajtást. Példa. 

```

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

```
Ennek a kódnak a végrehajtási sorrendje. 

![Call Stack](../img/call-stack.png)

A JavaScript egy single-threaded (egyszálas) programozási nyelv, ami azt jelenti hogy csak egy call stackje van igy egyszerre csak egy dolgot hajt végre. 





