/*Ukoly - vstup a podmínky:
1) Přijměte jméno jako vstup od uživatele, dale nechte zadat jeho vek a vypište na základě věku jednu ze dvou vět ve tvaru:
 a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
 b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.
*/

/*

2)  Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu "Největší číslo je A: 37".​
} */

let A = Number(prompt('Zadej libovolné číslo A:'));
let B = Number(prompt('Zadej libovolné číslo B:'));
let C = Number(prompt('Zadej libovolné číslo C:'));

if (A > B && A > C) {
  console.log('Největší číslo je A: ' + A);
} else if (B > A && B > C) {
  console.log('Největší číslo je B: ' + B);
} else if (C > A && C > B) {
  console.log('Největší číslo je C: ' + C);
} else {
  console.log('Některá z čísel jsou stejná');
}
