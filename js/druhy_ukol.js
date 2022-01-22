/*
ZADANI:
Úkol - proměnné a operátory
1) Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.".

výpočet BMI = hmotnost (kg) / (výška v metrech)²
*/

let jmeno = 'Petra';
let vek = 33;
let vaha = 55;
let vyska = 1.74;

let bmi = vaha / vyska ** 2;
let bmi_zaokrouhlene = Math.round(bmi);

console.log(bmi);
console.log(bmi_zaokrouhlene);

console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    'let, vážím ' +
    vaha +
    'kg, měřím ' +
    vyska +
    'm a moje BMI je ' +
    bmi_zaokrouhlene +
    '.'
);

let odpoved = Number(prompt('Ahoj, kolik je ti let?'));
console.log(odpoved);
