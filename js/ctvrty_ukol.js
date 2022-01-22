/*
  1) Napiste funkci, ktera vypise soucet, rozdil, nasobek a podil 2 zadanych cisel, rozdil zobrazujte jako absolutni hodnotu
  - Math.abs()
*/

function vypisMatematickeOperace(x, y) {
  let soucet = x + y;
  let rozdil = Math.abs(x - y);
  let nasobek = x * y;
  let podil = x / y;

  console.log(
    'Soucet: ' +
      soucet +
      ' Rozdil: ' +
      rozdil +
      ' Násobek: ' +
      nasobek +
      ' Podil: ' +
      podil
  );
}

function spoctiObsahObdelniku(x, y) {
  let vysledek = x * y;

  return vysledek;
}

/*
  2) Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
  - prvočíslo - dělitelné pouze 1 a samo sebou​
  zbytek po dělení: % - modulo​
  - v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.
*/

function jePrvocislo(x) {
  let isPrime = true;
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

let cislo = jePrvocislo(Number(prompt('Zadej cislo:')));
console.log(cislo);
