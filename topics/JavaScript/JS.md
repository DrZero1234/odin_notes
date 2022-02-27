#JS Alapok

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