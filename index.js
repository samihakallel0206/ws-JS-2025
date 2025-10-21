// Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot d'une phrase.

// console.log(5);
"bonjour chers collègues";
"Bonjour Chers Collègues";

function majMot(chaine) {
  var str = chaine[0].toUpperCase();

  for (var i = 1; i < chaine.length; i++) {
    str = str + chaine[i];
  }
  return str;
}
// console.log(majMot("hello"));
function MajPh(phrase) {
  var resF = "";
  var tab = phrase.split(" ");
  console.log(tab.join(" "));
  console.log(tab);
  for (var mot of tab) {
    console.log(mot);
    resF += majMot(mot) + " ";
  }
  return resF;
}

// console.log(MajPh("bonjour chers collègues"));

tab = [1, 5, 0, 4, -8, -2];

function MinMax(tab) {
  var min = tab[0];
  var max = tab[0];
  for (var el of tab) {
    if (min > el) min = el;
    if (max < el) max = el;
  }

  return `le minimum du tableau est ${min} et le max est ${max}`;
}

console.log(MinMax(tab));

sum = 0;
for (var elt of tab) {
  sum += elt;
}
