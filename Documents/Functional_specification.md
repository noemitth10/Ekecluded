# A rendszer célja és a nem céljai
A rendszer célja a szórakoztatás, amelyet egy JavaScriptben írt kígyó fog elvégezni. A játék viszonylag egyszerű felépítésű, egy pályán a kígyót irányítva, almákat felvéve a kígyó méretét és pontszámot növelve kell minnél tovább életben maradni. A kigyó irányítása a billenytyűzeten lévő nyilak segítségével hajtható végre. A pályán néhány akadály is található amelyhez hozzáérve a játék véget ér. A játék akkor is véget ér ha a kígyó feje hozza ér a teste bármelyik részéhez.
# Jelenlegi helyzet
A megrendelő szeretne egy webes játékot, hogy ezáltal is népszerűsítse oldala látogatottságát. Egy egyszerű játék segítségével szeretné ezt megvalósítani. A játék segít az oldal látogatóinak a kikapcsolódásban illetve, hogy elszakadhassanak kicsit a mindennapok terheitől. Már több játékkal is próbálkoztak, de eddig egyik sem hozta el számukra a nagy áttörést. Ezen okból kifolyólag kértek fel minket, hogy készítsünk el egy Snaket és egy hozzátartozó adatbázis, amelybe a felhasználók Snake játékban elért pontszámát nyomon tudják követni a későbbiek folyamán. Egy többjátékos módra is igényt tart a megrendelő, hogy a felhasználók tudjanak csapatban dolgozni vagy a másik játékos ellen játszani.
# Vágyálom rendszer
Az alkalmazás egy igényes grafikával kidolgozott webes felületen elérhető Snake játék, amelyben a játékosok pontokot gyüjtenek. A rendszer célja, hogy a felhasználók kikapcsolódását, szórakozását segítsék elő. Az alkalmazás használata során elért pontjaikat nyomon tudják követni a ranglistában más játékosok eredményei között. A játék folyamán a felhasználók almák gyüjtésével érnek ell pontot, minél több almát vesznek fel annál több pontjuk lesz illetve az úgynevezett kígyó mérete is annál nagyobb lesz. A felhasználók az alkalmazásban tudnak együtt játszani vagy akár egymás ellen is a többjátékos módban.
# Ajánlások
Webes aplikációként a következő szabványok vonatkoznak ránk.
## Általános szabványok
- Muszáj könnyen használhatónak lenni a célközönség számára.
- Logikusan kell működnie a célközönség számára.
- Haszálnia kell az iparág legjobb gyakorlatait.
- Olyan stílusokat kell használnia, amelyek következetesek az alkalmazásban és a társított webhelyen, beleértve a következőket is:
		- A hibaüzeneteknek állandó helyen és stílusban kell megjelenniük, és elegendő információt kell tartalmazniuk.
		- A nem elérhető űrlapvezérlőket el kell rejteni.	
## Fejlesztési technológia, Programozási nyelv
A webes alkalmazás a következő(vagy fejlettebb) technológíákat használja:
- JavaScript 1.8.5
Ajánlott fejlesztői környezet:
- Visual Studio Code 1.49.0
Minimum Böngésző szabványok
A webalkalmazásnak megfelelően kell működnie és megjelennie a következő böngészőverziókban:
- Microsoft Edge
- Mozilla Firefox
- Apple Safari
- Google Chrome
- Opera
Az alkalmazáshoz a böngészőknek támogatnia kell a JavaScriptet és a munkamenet-alapú sütiket	
Alakalmazás tesztelés
A webalkalmazásokat és webhelyeket alaposan tesztelni kell az összes szükséges böngészőverzióban, 800 × 600, 1024 × 768, 1360 × 768 és 1920 × 1080 képernyőfelbontásokkal.
# Jelenlegi üzleti folyamatok
A mai snake játékok nem használják ki a különböző web böngészők adta lehetőségeket és a 
legtöbb böngészőben nem is érhető el. Jelenleg a snake csak a régebbi böngészőkben, illetve 
régebbi készülékeken működik, amely nem célszerű, mivel a felhasználók egy jelentős része 
már az újabb böngészőket, készülékeket használja. A többjátékos mód hiánya is egy nagy
hiányossága a jelelnlegi snake játékoknak.
# Igényelt üzleti folyamatok
Azért, hogy könnyebben elérhetővé tegyük a snake játékot létrehozzuk a legújabb snake 
játékot, amely modern web böngészőkön és okos eszközökön helyt tud áll. A felhasználóknak
egyszerűbb dolga lesz, mert a régebbi snake játékokhoz képest egy sokkal felhasználó 
barátabb menü fogja majd fogadni őket a bejelentkezés vagy regisztráció után. Az alkalmazás 
használata során elért pontjaikat folyamatosan számon tudják tartani, illetve a két kör 
között vissza tudják majd nézni a legmagasabb elért pontszámukat vagy az előző körben elért 
pontszámukat. A többjétákos mód kialakítása fontos, hogy megadjuk a lehetőséget a 
felhasználók közti verseny szellem kialakításában, átalakításában.
# Követelménylista
## Funkcionális:
- Regisztráció létrehozása
- Log in létrehozása
- Pontozási rendeszer megtervezése és létrehozása
- Random pont generálása képernyőre
- Mozgatás és növkedés megtervezése és létrehozása
## Nem funkcionális:
- Pálya megtervezése
- Grafikai elemek megtervezése
- Egyértelmű felhasználói felület megtervezése és létrehozása

| Modul	      |	Id | Név                   | Leírás                                           |
|:-----------:|:--:|:---------------------:|:------------------------------------------------:|
| Jogosultság | A1 | Regisztráció          | Regisztráció létrehozása                         |
| Jogosultság |	A2 | Log in                | Log in létrehozása                               |
| Játék	      | G1 | Pálya tervezés        | Pálya megtervezése                               |
| Játék	      |	G2 | Pontozási rendszer	   | Pontozási rendszer létrehozása                   |
| Játék	      |	G3 | Random pont generálás | Random pont generálása képrenyőre                |
| Játék	      |	G4 | Mozgatás, Növekedés   | Mozgatás és Növekedés implementálása             |
| Játék       |	G5 | Grafikai elemek       | Grafikai elemek megtervezése                     |
| Játék	      |	G6 | Felhasználói felület  | Felhasználói terület megtervezése és létrehozása |

# Használati esetek 
Amikor a felhasználók megnyitják a webes aplikációt a kezdő oldalra fognak kerülni ami egy bejelentkezési felület, ahol több opcióval kerülnek szembe mint például a regisztráció vagy a jelszó megváltoztatása. Bejelentkezés vagy regisztráció után a felhasználók a fő oldalra kerülnek, ahol el bírják idítani az aplikációt vagy a saját felhasználói fiókjukat tudják testreszabni.

# Követelmény megfeleltetés
A pont gyűjtés funkció úgy kerül megvalósításra, hogy mikor a kígyó áthalad egy gyümölcs obijektumon akkor megnöveljük a számlálót. Az eredményt egy táblába mentjük ki a játék végeztével. A mozgatás billentyűzet segítségével történik. Minden begyűjtött pont után a kígyó egy előre meghatározott értékkel lesz nagyobb. Random pontot egy Math osztálybeli Random függvény segítségével valósítjuk meg.

# Képernyőtervek

# Fogalomszótár
JavaScript: A JavaScript avagy JS egy programozási nyelv, amelyet kifejezetten az internetre fejlesztettek ki. A legtöbb webböngésző szoftver, illetve az okostelefonok is mind támogatják a JavaScriptet.
Keretrendszer: A keretrendszereket programozók használják az alkalmazások alap struktúrájának kialakítására. 
Szoftver: A szoftver (angol: software) alatt a legszűkebb értelemben elektronikus adatfeldolgozó berendezések (például: számítógépek) memóriájában elhelyezkedő, azokat működtető programokat értünk.
Program kód: A program kód alatt azokat az lagoritmusokat és egyéb számítu gépes utasításokat értjük, melyek hozzájárulnak a program működéséhez.
Funkció: Egy szerep vagy rendeltetés, amit egy gép, szerkezet, szervezet vagy személy tölt be.
Változó: A változó egy, olyan érték amelynek értéke a program futása alatt folyamatosan változhat.
Math osztály: A feljesztői környezetebe beleépített matematikai osztály, ami segít a precíz matematikai kalkulációkkal.