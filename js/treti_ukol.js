/*
  1) Čti od uživatele čísla tak dlouho, dokud nezadá 0 a vždy vypiš NAAKUMULOVANÝ součet těchto čísel ​
*/

let cislo = 1;
let soucet = 0;

while (cislo !== 0) {
  soucet = soucet + cislo;
  cislo = Number(prompt('Zadej číslo:'));
  console.log('Akumulovaný součet = ' + soucet + 'číslo: ' + cislo);
}

/*
  2) Nechte uzivatele zadat 2 cisla, ktere znaci dolni a horni mez na ciselne ose celych cisel - vcetne, pokud tedy zada 3 a 7, uvazujme cisla 3, 4, 5, 6, 7. Vypište pomocí FOR cyklu pouze sudá čísla.
*/

/*
  3) Prepiste tento for cyklus pomoci While cyklu
    for (let i = 12, j = 12 ** 3; i < 12 + j; i = i * 2) {
      console.log(i);
    }
  - poznamka - pripomenout definici casti for cyklu
*/
