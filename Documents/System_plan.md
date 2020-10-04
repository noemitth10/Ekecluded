# A rendszer célja
	A rendszer célja a szórakoztatás, amelyet egy JavaScriptben írt kígyó fog elvégezni. A játék viszonylag egyszerű felépítésű, egy pályán a kígyót irányítva, almákat felvéve a kígyó méretét és pontszámot növelve kell minnél tovább életben maradni. A kigyó irányítása a billenytyűzeten lévő nyilak segítségével hajtható végre. A pályán néhány akadály is található amelyhez hozzáérve a játék véget ér. A játék akkor is véget ér ha a kígyó feje hozza ér a teste bármelyik részéhez.
# Projekt terv
Megrendelő: QNSZT kft.
Projekt vezetők: Farkas Balázs, Tóth Noémi, Barkóczi Martin
Junior programozók: Alexa Kornél, Horvát István, Horváth Gábor

A rendszer elkészítésére 1 hónap áll rendelkezésre. Ez idő alatt a dokumentációnak és a rendszernek is kész kell hogy legyen.

Ütemterv:
-Dokumentációnak 2020 október 1-re kész kell lennie.
-A rendszernek 2020 október  8-ra kész kell lennie.

Mérföldkövek:
-Rendszer főbb részeinek megtervezése.
-Rendszer megvalósítása a tervek alapján.
-Dokumentáció megírása.
-Tesztelés/Javítás.

# Üzleti folyamatok modellje
	Sponzorok támogatására lesz szükség a rendszer fejlesztése során, illetve egy szerverre amin a rendszer fut. A felhasználóknak szüksége van aktív internet kapcsolatra, hogy a rendszert igénybe tudják venni.

# Követelmények
	Fontos lenne, ha a rendszer tartalmazna igényesen elkészitett Grafikai elemeket mivel ez nagyban hozzajárul a felhasználói élményhez. Ezentúl jó lenne, ha a rendszer tartalmazna megfelelően elkészített Pontrendszert is ahol megnézhetnénk az előző körökben elért eredményt és azt is, hogy mennyi volt a legjobb elért pontszám. Legyen a rendszerben egy igényesen elkészített Menü is amelyben kényelmesen lehet navigálni, például játék indítására, pontszámok megtekintésére, esetleg nehézségi szint választására és egy kilépés opcióra.

- Pálya megtervezése
- Pontozási rendszer létrehozása
- Random pont generálása képrenyőre
- Mozgatás és Növekedés implementálása

# Funkcionális terv
Pálya megtervezése:
	A játékban egy négyzet alakú pálya lesz akadályokkal ellátva amelyek fix helyen helyezkednek el. Ha a karakterünk valamelyik oldalt a pályán kivülre megy akkor a másik oldalt jelenik meg és folytatja az előre való mozgást, ilyenkor a játékmenet folytatódik.
Pontozási rendszer létrehozása:
	A program itt egy integer változóban tárolja az aktuális pontszámot, melyet minden alma felvéltelkor megnövel.
Ezt a változót minden játék végén nullázzuk, hogy új játék kezdeténél ne az előzőleg elért pontszámtól induljon a számláló.
Random pont generálása képrenyőre:
	A program a Math osztály random metódusával egy véletlenszerű pontot generál, ami a pontok elhelyezésére fog szolgálni.
Ennek az eljárásnak mindedn új játéknál és minden pont felvétel után le kell futnia, mivel új pontra lesz szukség a játék folytatásához.
Mozgatás és Növekedés implementálása:
	A program az x vagy y kordinátát változtat ez által a karakterünk előre fog mozogni, gombnyomással irányt tudunk változtatni a karakterünkkel. 
	
# Fizikai környezet
	A megrendelő által kért Snake játékot JavaScriptben fogjuk kivitelezni. 
A webalkalmazásnak megfelelően kell működnie és megjelennie a következő böngészőverziókban:
	- Microsoft Edge
	- Mozilla Firefox
	- Apple Safari
	- Google Chrome
	- Opera

# Tesztterv
	Alkalmazásunkat minden böngészőben teszteljük 800 × 600, 1024 × 768, 1360 × 768 és 1920 × 1080 képernyőfelbontásokkal, illetve ellenőrizzük, hogy futás közben ne fordulhassanak elő váratlan hibaesetek. Ezen felül ellenőrizzük, hogy csak az előre megadott gombokkal lehessen csak irányítani a játékot.