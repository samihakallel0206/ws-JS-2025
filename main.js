// alert("Bonjour les amis!");
// ***************!Journalisation de sortie & Console
// alert("Hello World"); // Ne pas utiliser pour le débogage!!!
// // console.log("bonjour je suis là");
// console.error("Ceci est une erreur");
// console.warn("Ceci est un avertissement");
// console.log(prompt("âge"));

//***********************!-Variable

// var name = "student"; // déclaration d'une variable
// console.log(name);
var name = 10; // réassignation avec `var`
// console.log(name);

// const name = "Foulen";
// const age = 99;
// console.log(age);
// `var` peut être réassigné, mais `const` ne peut pas
// var name;
// name = "foulani";
// console.log(name);
// age = 100;
// console.log(age);

//*****************************************!Types de données

// var name = "ahfgdhdh";
// console.log(typeof name);
// var age = 260;
// console.log(typeof age);
// var tallness = 1.75;
// console.log(typeof tallness);
// var isPerson = true;
// console.log(typeof isPerson);
// var x = null;
// console.log(typeof x);
// var z;
// console.log(typeof z);

//**************************!Opérateurs arithmétiques
// + , - , * , / , % , ++ , -- , **

// console.log(13 - 2);
// console.log("3" * "2");
// console.log(typeof "3");
// console.log(3 * "TEXTE");
// console.log("10" / "2");
// console.log(10 % 2);
// console.log(10 % 3);
// console.log("3" ** "2"); //la puissance
// console.log(5 + 3);
// console.log(5 + "a" + "agfertf"); //concaténation
// var y = 5;
// console.log(++y);
// console.log(y);
// console.log(y++);
// console.log(y);
// var z;
// console.log(z);
// z = ++y;
// console.log(z);
// console.log(y);
// var t = y++;
// console.log(t);
// console.log(y);

//******************!Opérateurs de comparaison
// = affecte une valeur à une variable

// == compare les valeurs des variables

// === compare les valeurs ET les types des variables

// /! le contraire (opposé)

// /!= compare l'inégalité des valeurs

// /!== compare l'inégalité des valeurs et des types

// var a = 25; //affectation
// var b = "25";
// console.log(typeof a);
// console.log(typeof b);
// if (a === b) {
//   console.log(a + " est égal en valeur et en type à " + b);
// } else {
//   console.log("pas égal en type ou en valeur");
// }
// if (a == b) {
//   console.log("égal ");
// } else {
//   console.log("pas égal");
// }

//****************************!Truthy & Falsy
// false, undefined, null, 0, "", NaN//falsy

// var test = null;
// var title = "";
// var y; //undefined
// console.log(typeof y);
// var a = 0;
// console.log(test);
// console.log(Boolean(test));
// console.log(Boolean(title));
// console.log(Boolean(y));
// console.log(Boolean(a));
// if (test) {
//   console.log('okay')
// } else {
//   console.log(' pas okay')
// }

// ***********************************!Opérateurs logiques
// ********** X && Y : ET logique
// Renvoie la première valeur fausse
//renvoie la deuxieme valeur si première vraie
// console.log(null && 5);
//  a && b  =>
//  f    f  f
//  v    f  f
//  f    v  f
//  v    v  v

// console.log(5 && 1);

// ********** X || Y : OU logique
// Renvoie la première valeur vraie
// console.log("" || 0);
//  a || b  =>
//  f    f  f
//  v    f  v
//  f    v  v
//  v    v  v

//***************!Concaténation de chaînes
// var name = "hamza";
// var age = 20;

// // Méthode archaïque traditionnelle
// console.log("Je m'appelle " + name + "\n" + "et j'ai " + age + " ans");

// // Littéraux de gabarit (utilisez ça!)
// console.log(`Je m'appelle ${name}
//     et
//     j'ai
//      ${2 + 3} ans`);
// //``:backteks (altGr + 7)
// //Caractères spéciaux (\, \', \n, \\)

// console.log('je m"appelle sam');

//******!Méthodes et propriétés des chaînes de caractères **** */
// var s = "Hello World of JS";
// var val;
// console.log(val);
// console.log(typeof val);

// // Obtenir la longueur
// val = s.length;
// console.log(s.length);
// console.log(val);

// // Index des chaînes
// console.log(s[0]);
// console.log(s[s.length - 1]);

// Changer la casse
// j === J? //différent
// val = s.toUpperCase();
// console.log(val);
// val = s.toLowerCase();
// console.log(val);
// var s = "Hello World of JS";
// // Extraire une sous-chaîne
// val = s.substring(5, 10);
// console.log(val);
// var s = "Hello World";
// // Diviser en tableau
// val = s.split(""); // résultat tableau
// console.log(val);
// val = [1, 4, 5];
// console.log(typeof val);

// val = val.join(""); // tableau ---> chaîne
// console.log(val);
// console.log(typeof val);

// console.log(s);
// console.log(val);

//*****************!Switch (/!\break) */
// var color = "noire";
// switch (color) {
//   case "rouge":
//     console.log("La couleur est rouge");
//     break;
//   case "bleue":
//     console.log("La couleur est bleue");
//     break;
//   case "jaune":
//     console.log("La couleur est jaune");
//     break;
//   default:
//     console.log("La couleur n'est ni rouge ni bleue ni jaune");
// }
// // Reproduction avec if/else
// if (couleur === "rouge") {
//   console.log("La couleur est rouge");
// } else if (couleur === "bleue") {
//   console.log("La couleur est bleue");
// } else if (couleur === "jaune") {
//   console.log("La couleur est jaune");
// } else {
//   console.log("La couleur n'est ni rouge ni bleue ni jaune");
// }
// ************!FONCTIONS (en tant que type)
// Déclaration de fonction
// function dummyFunc() {
//   return;
// }

// // Vérification du type
// console.log(typeof dummyFunc);

//************      Fonctions       */
// function salutation(n) {
//   return "Bonjour, je m’appelle " + n;
// }
// function salutation(n) {
//   return `Bonjour, je m'appelle ${n} `;
// }

// console.log(salutation("Nessrine"));
// console.log(salutation("Wissem"));
// console.log(salutation(5));

// function soustraction(g, h) {
//   return g - h;
// }
// var résultat = soustraction("5", "10");
// console.log(résultat);
// console.log(soustraction(4, 3));
// console.log(soustraction("600a", 326587));
//
// var x = 10;
// var y = 3;
// console.log(soustraction(x, y)); //il faut déclarer ses var

// function addition(g, h) {
//   return g + h;
// }
// console.log(addition("4", "3"));

// Déclaration d’un tableau
// var tableau = [];
// console.log(tableau);
// console.log(typeof tableau);

//************* */ Conditions
// **** Instruction Simple If/Else
// const x = "10";

// if (x === 10) {
//   console.log("x est égal à 10"); //❌
// } else if (x > 10) {
//   console.log("x est supérieur à 10"); //❌
// } else {
//   console.log("x est inférieur à 10");//sortie n'est valable
// }

//*********************!! Boucles
// ********************** For
// for (var i = 1; i <= 10; i++) {
//   console.log("Numéro de la boucle For : " + i);
// }

// var tab = [1, "p", "bonjour", true];
// // Boucle décroissante
// for (var i = 0; i < tab.length; i++) {
//   console.log(i);
//   console.log(tab[i]);
// }
// for (var i = tab.length - 1; i >= 0; --i) {
//   console.log(i);
//   console.log(tab[i]);
// }

/*    for ... of   */
// for (var element of tab) {
//   /// valeur ou élément
//   console.log(element);
// }
// /*       for ... in       */
// for (var i in tab) {
//   // index
//   console.log(i);
//   console.log(tab[i]);
// }

//*********************! While
// var l = 10;
// while (l <= 5) {
//   console.log("hola");
//   // Affiche "hola" tant que l < 5
//   console.log(l);
//   l++; //changement
//   console.log(l);
// }

// var i = 0;
// do {
//   console.log(`Numéro de la boucle Do While : ${i}`);
//   i++;
// } while (i <= 5);

// ************! TABLEAUX - Stocker plusieurs valeurs dans une variable
// var numbers = [1, 2, 3, 4, 5];
// var fruits = ["pommes", "oranges", "poires", "raisins"];
// var hobbies = ["dormir", 33, true];

// console.log(numbers);
// console.log(fruits);
// console.log(hobbies);
// console.log(typeof numbers);

// *** Modification des tableaux
// const numbers = [1, 2, 3];
// console.log(numbers);
// // // Une nouvelle affectation
// numbers[1] = "bonjour"; // Remplace l'élément à l'index 1
// console.log(numbers);

//********************! Méthodes et propriétés des tableaux
// const colors = ["noir", "blanc", "rouge", "bleu"];
// var x = "Bonjour";
// console.log(colors);

// // Obtenir la longueur
// console.log(colors.length);

// // // Obtenir une valeur (!: Les index commencent à 0)
// console.log(colors[2]);

// // // Ajouter une valeur avec push()
// colors.push("jaune");
// console.log(colors);

// // // Ajouter une valeur au début
// colors.unshift("violet");
// console.log(colors);

// // // Supprimer la dernière valeur
// colors.pop();
// console.log(colors);

// // // Supprimer la première valeur
// colors.shift();
// console.log(colors);

// // Vérifier si c’est un tableau
// console.log(Array.isArray(colors));
// console.log(Array.isArray(x));

// // Obtenir un index
// console.log(colors.indexOf("rouge"));

// **********************! Parcourir des tableaux
// // Tableau d'objets
// const numbers = [22, 55, 66];

// // // ********************** Boucle For
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // // ********************** Boucle For...of
// for (var x of numbers) {
//   console.log(x);
// }

// // // ********************** Boucle For...in
// for (var i in numbers) {
//   console.log(numbers[i]);
// }

// ************! OBJETS
// const person = {
//   name: "Emna",
//   age: 20,
//   isPerson: true,
//   hobbies: ["manger", "dormir"],
// };

// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies[0]);

//****************************!Objets
// const person = {
//   // un objet est une collection de paires clé-valeur
//   firstName: "Adam",
//   age: 30,
//   hobbies: ["musique", "films", "sports"],
//   address: {
//     street: "66 rue Principale",
//     city: "peu importe",
//     state: "quelque part",
//   },
// };
// var x = [1, [2, 5, 4], 3];
// console.log(x[1][2]);
// // // Obtenir une seule valeur (obj.clé)
// console.log(person.firstName);
// console.log(person.address.street);

// // // Ajouter une propriété
// person.email = "adam@gmail.com";
// console.log(person);
// person.hobbies.push("chanter");
// console.log(person);

// *** Mutabilité
// *** Objets
// const person = {
//   name: "foulan",
//   age: 27,
//   adresse: "Tunis",
// };
// // console.log(person);

// // Modifier une propriété
// person.name = "mohamed";
// console.log(person);

// // // // Supprimer une propriété
// delete person.age;
// console.log(person);

// // // // Ajouter une propriété
// person.email = "m@gmail.com";
// console.log(person);

// ************ /!\ Tableau d'objets
// const users = [
//   {
//     name: "personne",
//     age: 23,
//     email: "p1@gmail.com",
//   },
//   {
//     name: "personne 2",
//     age: 31,
//     email: "p2@gmail.com",
//   },
//   {
//     name: "personne 3",
//     age: 155,
//     email: "p3@gmail.com",
//   },
// ];

// console.log(users);
// console.table(users);
