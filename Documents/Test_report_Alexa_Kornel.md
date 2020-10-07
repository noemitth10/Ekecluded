# Teszt jegyzőkönyv

# Projekt adatai:
- Projektkód: SJ014FS
- Projektnév: Snake Játék

# Tesztelő adatai:
- Név: Alexa Kornél
- Beosztás: Junior programozó

| Tesztkód | Tesztelt funkció | Teszteset leírása                                                                                              | Státusz     | Hiba oka                                      | időpont           |
|----------|------------------|----------------------------------------------------------------------------------------------------------------|-------------|-----------------------------------------------|-------------------|
| T11      | Interface        | A pálya megfelően megjelent.                                                                                   | Sikeres     | -                                             | 2020.10.07. 17:35 | 
| T12      | Mechanika        | A kígyó megfelően halad előre gomb nyomás nélkül.                                                              | Sikeres     | -                                             | 2020.10.07. 17:40 |
| T13      | Irányítás        | A kígyó balra kanyarodása nem megfelően működik. Balra kanyarodásnál nem kanyarodik.                           | Sikertelen  | Téves gombra volt állítva a balra kabyarodás. | 2020.10.07. 17:44 |
| T13      | Irányítás        | A kígyó kanyarodása megfelően működik. Balra kanyarodás is sikeresen javítva lett.                             | Sikeres     | -                                             | 2020.10.07. 17:50 |
| T14      | Mechanika        | A kígyó a pályáról kihaladásnál nem jelenik meg a szemben lévő oldalt.                                         | Sikertelen  | Rossz implementáció.                          | 2020.10.07. 17:55 |
| T14      | Mechanika        | A kígyó a pályáról kihaladásnál megfelően jelenik meg a szemben lévő oldalt.                                   | Sikeres     | -                                             | 2020.10.07. 18:02 |
| T15      | Mechanika        | A növekedés funkció megfelően működik. Pont felvételel után a kígyó a megfelő értékkel növekedik.              | Sikeres     | -                                             | 2020.10.07. 18:04 |
| T16      | Mechanika        | A játék vége funkció nem megfelően működik, a kígyó saját magába való ütközésekor nincs vége a játéknak.       | Sikertelen  | A feltétel helytelünöl volt megadva.          | 2020.10.07. 18:07 |
| T16      | Mechanika        | A játék vége funkció sikeresen javítva lett. Ha a kígyó saját magába ütközik akkor a játék megfelően véget ér. | Sikeres     | -                                             | 2020.10.07. 18:15 |
| T17      | Interface        | A játék végevel megfelelően értesíti a program a felhasználót arról, hogy a játék véget ér.                    | Sikeres     | -                                             | 2020.10.07. 18:18 |