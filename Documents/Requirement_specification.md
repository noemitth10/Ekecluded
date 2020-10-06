# Bemutatkozó
Az Ekecluded egy világszerte ismert fejlesztő csapat akik hatalmas dolgokat képesek elérni közösen, a tagok között kialakult remek kapcsolat és programozási tapasztalataik segítségével. A csapat 6 tagból áll, a csapat 2018-ban alakult.
A jelenlegi projektünk egy JavaScript alapú Snake.
## Tagok: 
- Alexa Kornél
- Barkóczi Martin
- Farkas Balázs
- Horváth Gábor
- Horváth István
- Tóth Noémi Evelin
# Jelenlegi helyzet
Manapság az emberek kevés időt tudnak eltölteni szórakozással a mindennapjaikban, ezáltal egyre stresszesebbek és demotiváltak lesznek, így munkamoráljuk is csökken. Alkalmazásunk segítséget nyújt ezen problémák ellen egy mindenki álltal ismert egyszerű játék formájában.
# Vágyálom rendszer
A projekt célja egy olyan játék, mely könnyed kikapcsolódást, szórakozást nyújt felhasználóinak. A játék webes formában elérhető. Regisztráció után a játékban elért eredményeit nyomon követheti illetve összemérheti eredményeit játékos társaival is. Látványos színes felülettel rendelkezik a játék, hogy ezáltal is minnél nagyobb kikapcsolódást nyújtson felhasználóinak. Pontokat a játékosok a játékon belüli almák összeszedésével gyűjthetnek, a pontok az úgynevezett kígyó méretével nőnek a játék menete során. A felhasználóknak lesz esélyük együtt játszani a többjátékos módban, illetve egymás ellen is dolgozhatnak a saját döntésük alapján.
# A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása
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
## Minimum Böngésző szabványok
A webalkalmazásnak megfelelően kell működnie és megjelennie a következő böngészőverziókban:
- Microsoft Edge
- Mozilla Firefox
- Apple Safari
- Google Chrome
- Opera
Az alkalmazáshoz a böngészőknek támogatnia kell a JavaScriptet és a munkamenet-alapú sütiket
## Alakalmazás tesztelés
A webalkalmazásokat és webhelyeket alaposan tesztelni kell az összes szükséges böngészőverzióban, 800 × 600, 1024 × 768, 1360 × 768 és 1920 × 1080 képernyőfelbontásokkal.
# Jelenlegi üzleti folyamatok modellje
A mai snake játékok nem használják ki a különböző web böngészők adta lehetőségeket és a legtöbb böngészőben nem is érhető el. Jelenleg a snake csak a régebbi böngészőkben, illetve régebbi készülékeken működik, amely nem célszerű, mivel a felhasználók egy jelentős része már az újabb böngészőket, készülékeket használja. A többjátékos mód hiánya is egy nagy hiányossága a jelelnlegi snake játékoknak.
# Igényelt üzleti folyamatok modellje
A megrendelő a fő oldalon szeretne belépni, valamint megkezdeni a regisztrációt, mely egy külön oldalon folytatódna. Bejelentkezés után lehetőséget, hozzáférést kell biztosítani a felhasználónak az alkalmazás funkcióihoz, mint például adat módosítás, beállítások az alkalmazáson belül, a snake játék megkezdése, a jelenlegi rekord megtekintése vagy az előző körben elért pontszám visszanézése.
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

|Modul       | Id | Név                   | Leírás                                          |
|:----------:|:--:|:---------------------:|:-----------------------------------------------:|
|Jogosultság | A1 | Regisztráció          | Regisztráció létrehozása                        |
|Jogosultság | A2 | Log in                | Log in létrehozása                              |
|Játék       | G1 | Pálya tervezés        | Pálya megtervezése                              |
|Játék       | G2 | Pontozási rendszer    | Pontozási rendszer létrehozása                  |
|Játék       | G3 | Random pont generálás | Random pont generálása képrenyőre               |
|Játék       | G4 | Mozgatás,Növekedés    | Mozgatás és Növekedés implementálása            |
|Játék       | G5 | Grafikai elemek       | Grafikai elemek megtervezése                    |
|Játék       | G6 | Felhasználói felület  | Felhasználói terület megtervezése és létrehozása|

# Irányított és szabad szöveges riportok szövege
# Fogalomszótár
JavaScript - A JavaScript avagy JS egy programozási nyelv, amelyet kifejezetten az internetre fejlesztettek ki. A legtöbb webböngésző szoftver, illetve az okostelefonok is mind támogatják a JavaScriptet. 
Keretrendszer - A keretrendszereket programozók használják az alkalmazások alap struktúrájának kialakítására. 
Szoftver - A szoftver (angol: software) alatt a legszűkebb értelemben elektronikus adatfeldolgozó berendezések (például számítógépek) memóriájában elhelyezkedő, azokat működtető programokat értünk. 
Program kód - A program kód alatt azokat az lagoritmusokat és egyéb számítu gépes utasításokat értjük, melyek hozzájárulnak a program működéséhez. 
Funkció - Egy szerep vagy rendeltetés, amit egy gép, szerkezet, szervezet vagy személy tölt be. 
Változó - A változó egy, olyan érték amelynek értéke a program futása alatt folyamatosan változhat.
Math osztály - A feljesztői környezetebe beleépített matematikai osztály, ami segít a precíz matematikai kalkulációkkal.