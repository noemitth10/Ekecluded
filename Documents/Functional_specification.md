# A rendszer célja és a nem céljai
	A rendszer célja a szórakoztatás, amelyet egy JavaScriptben írt kígyó fog elvégezni. A játék viszonylag egyszerű felépítésű, egy pályán a kígyót irányítva, almákat felvéve a kígyó méretét és pontszámot növelve kell minnél tovább életben maradni. A kigyó irányítása a billenytyűzeten lévő nyilak segítségével hajtható végre. A pályán néhány akadály is található amelyhez hozzáérve a játék véget ér. A játék akkor is véget ér ha a kígyó feje hozza ér a teste bármelyik részéhez.

# Jelenlegi helyzet
	A megrendelő szeretne egy webes játékot, hogy ezáltal is népszerűsítse oldala látogatottságát. Egy egyszerű játék segítségével szeretné ezt megvalósítani. A játék segít az oldal látogatóinak a kikapcsolódásban illetve, hogy elszakadhassanak kicsit a mindennapok terheitől. Már több játékkal is próbálkoztak, de eddig egyik sem hozta el számukra a nagy áttörést. Ezen okból kifolyólag kértek fel minket, hogy készítsünk el egy Snaket.


# Vágyálom rendszer
	A rendszerben egy igényesen kidolgozott grafika megvalósítása lenne a cél, hogy a felhasználói élményeket javítsuk. Egy pontrendszer kidolgozására is törekedünk, hogy a felhasználúk követni tudják az eddig elért legmagasabb pontszámukat illetve az előző körben elért pontszámukat is. A menü-t szeretnék minél inkább leegyszerűsíteni, hogy megkönnyítsük a felhasználók navigációját a rendszeren belül.

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
	A megrendelő megbízta az Ekecluded programfejlesztői csapatot azzal, hogy készítsen egy Snake játékot amit böngészőből lehet majd játszani. A jelenlegi projektünk pedig arra összpontosít, hogy létrehozza ezt a böngészőből játszható Snake játékot a megrendelő követelményei alapján.


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

Modul	Id	Név				Leírás

Game	G1	Pálya tervezés			Pálya megtervezése
Game	G2	Pontozási rendszer		Pontozási rendszer létrehozása
Game	G3	Random pont generálás		Random pont generálása képrenyőre
Game	G4	Mozgatás,Növekedés		Mozgatás és Növekedés implementálása
Game	G5	Grafikai elemek			Grafikai elemek megtervezése

# Használati esetek 
	Amikor a felhasználók megnyitják a webes aplikációt a kezdő oldalra fognak kerülni ami egy bejelentkezési felület, ahol több opcióval kerülnek szembe mint például a regisztráció vagy a jelszó megváltoztatása. Bejelentkezés vagy regisztráció után a felhasználók a fő oldalra kerülnek, ahol el bírják idítani az aplikációt vagy a saját felhasználói fiókjukat tudják testreszabni.

# Követelmény megfeleltetés
	A pont gyűjtés funkció úgy kerül megvalósításra, hogy mikor a kígyó áthalad egy gyümölcs obijektumon akkor megnöveljük a számlálót. Az eredményt egy táblába mentjük ki a játék végeztével. A mozgatás billentyűzet segítségével történik. Minden begyűjtött pont után a kígyó egy előre meghatározott értékkel lesz nagyobb. Random pontot egy Math osztálybeli Random függvény segítségével valósítjuk meg.

# Képernyőtervek

# Fogalomszótár
	JavaScript - A JavaScript avagy JS egy programozási nyelv, amelyet kifejezetten az internetre fejlesztettek ki. A legtöbb webböngésző szoftver, illetve az okostelefonok is mind támogatják a JavaScriptet.
	Keretrendszer - A keretrendszereket programozók használják az alkalmazások alap struktúrájának kialakítására. 
	Szoftver - A szoftver (angol: software) alatt a legszűkebb értelemben elektronikus adatfeldolgozó berendezések (például: számítógépek) memóriájában elhelyezkedő, azokat működtető programokat értünk.
	Program kód - A program kód alatt azokat az lagoritmusokat és egyéb számítu gépes utasításokat értjük, melyek hozzájárulnak a program működéséhez.
	Funkció - Egy szerep vagy rendeltetés, amit egy gép, szerkezet, szervezet vagy személy tölt be.
	Változó - A változó egy, olyan érték amelynek értéke a program futása alatt folyamatosan változhat.
	Math osztály - A feljesztői környezetebe beleépített matematikai osztály, ami segít a precíz matematikai kalkulációkkal.