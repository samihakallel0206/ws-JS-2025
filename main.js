// !JOURNALISATION ET CONSOLE

// alert("Bonjour tous le monde!"); // Ne pas utiliser pour le débogage
// console.log("bonjour je suis là");
// console.warn("Ceci est un avertissement");
// console.error("Ceci est une erreur");
// console.log(prompt("âge"));

//!VARIABLES

// var → ancienne méthode (modifiable et redéclarable)
// const → constante (non modifiable)
// var nom = "Ali";
// console.log(nom);

// nom = true; // réassignation
// console.log("nom:", nom);

// const person = "Foulen";
// var age = 99;
// // console.log(age);
// // prenom = "Samiha";
// // // var personne;
// person= "Foulani";
// console.log(personne);
// age = 100;
// console.log(age);

//!TYPES DE DONNÉES
// var name = "zez";
// console.log(typeof name);
// var age = 260;
// console.log(typeof age);
// var tallness = 1.75;
// console.log(typeof tallness);

// var isPerson = false;
// console.log(typeof isPerson);
// var x = null;
// console.log(typeof x);
// var z;
// console.log(typeof z);

// ! OPÉRATEURS ARITHMÉTIQUES
// + , - , * , / , % , ++ , -- , **
// console.log(13 - 2);
// console.log("3" * 2);
// console.log(3 * "TEXTE");
// console.log("10" / "2");
// console.log(typeof "3");
// console.log(10 % 3);
// console.log("3" ** "2");
// console.log("5" + 2);
// console.log(typeof (5 + "a"));
// console.log((5 + "a"));
// console.log(typeof ("" + 125));
// var y = 5;
// console.log(++y);
// console.log(y++);
// console.log(y);

// ! OPÉRATEURS DE COMPARAISON
// var a = 25;
// var b = "25";
// console.log(typeof a, typeof b);

// if (a === b) {
//   //comparaison contenu et type ====
//   console.log("Égal en valeur et type");
// } else if (a == b) {
//   //comparaison contenu
//   console.log("Égal seulement en valeur");
// } else {
//   console.log("Pas égal");
// }
// console.log(a != b);
//=================================================
// toDO:resume
// = affectation d'une vvaleur à une variable

// == comparer les valeur des variables

// === comparer valeurs et types variables

// / ! le contraire (opposite)

// /!= comparer l'inégalité des valeurs

// /!== compares the inequality based on value and type

//!TRUTHY & FALSY
// ======================================================
// Falsy: false, undefined, null, 0, "", NaN
// var t = 123;
// console.log(Boolean(t));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean("re" * 3));
// console.log(Boolean(5 !== 5));

// if (null) console.log("Truthy");

//!OPÉRATEURS LOGIQUES

// && → ET, || → OU, ! → NON
// console.log(null && 5); //premier TRUE afficher le deuxieme
// a b     a && b
// 0 0       0
// 0 1       0
// 1 0       0
// 1 1       1
// console.log("abc" && 1); //premier faux afficher le premier
// // a b     a || b
// // 0 0       0
// // 0 1       1
// // 1 0       1
// // 1 1       1
// console.log("" || 7);
// console.log(true || 4);
// console.log(!false);

//!CONCATÉNATION DE CHAÎNES

// var nom2 = "Hamza";
// var age2 = 20;
// console.log("je "+ "\n"+ " m'appelle " + nom2);
// // console.log('je mappelle "sam"');
// // // // es6
// console.log(`Je m'appelle

//     ${nom2}
//     et j'ai ${age2}
//     ans`);
// "" '' ``
// ` ` Alt GR +7
//!MÉTHODES DES CHAÎNES

// var s = "Hello World of JS";
// console.log(s.length);
// console.log(s[5]);

// console.log(s[s.length - 1]);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(2, 10));
// console.log(s.split(" "));
// console.log(["H", "i"].join(""));

//! CONDITIONS ET BOUCLES

//--------------If else /Switch------------
// const x2 = 10;
// if (x2 == 10) {
//   console.log("x est égal à 10");
// } else {
//   if (x2 > 10) console.log("x > 10");
//   else console.log("x < 10");
// }

// var color = "bleue";
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
//     console.log("Autre couleur");
// }

// // traduction en if/else
// if (color === "rouge") console.log("rouge");
// else if (color === "bleue") console.log("bleue");
// else if (color === "jaune") console.log("jaune");
// else console.log("autre");

// ---------------- For Loop ----------------
// for (var i = 1; i <= 5; i++) console.log("For:", i);

// var tab = [1, "p", "bonjour", true];

// for (var i = 0; i < tab.length; i++) console.log(tab[i]);

// for (var element of tab) console.log(element);
// for (var i in tab) console.log(tab[i]);

// ---------------- While & Do While ----------------
// var l = 10;
// while (l <= 12) {
//   console.log("While:", l);
//   l++;
// }
// var i = 0;
// do {
//   console.log(`Do While : ${i}`);
//   i++;
// } while (i <= 2);

//!FONCTIONS
// function salutation(n) {
//   // console.log("moi");
//   return `Bonjour, je m'appelle ${n}`;
// }
// // console.log(salutation());
// console.log(salutation("Nessrine"));

// function soustraction(g, h) {
//   return g - h;
// }
// console.log(soustraction(10, 3));

// function addition(g, h) {
//   return g + h;
// }
// console.log(addition("4", "3"));

//! TABLEAUX

// var numbers = [1, 2, 3, 4, 5];

// var fruits = ["pommes", "oranges", "poires", "raisins"];
// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers[1]);
// // // // Modifier un élément
// numbers[0] = "bonjour";
// console.log(numbers);

// // // Méthodes utiles
// const colors = ["noir", "blanc", "rouge", "bleu"];
// const colors= 'abcde'
// colors.push("jaune");
// console.log(colors);
// colors.unshift("violet");
// console.log(colors);
// colors.pop();
// console.log(colors);
// colors.shift();
// console.log(colors);
// console.log(Array.isArray(colors));
// console.log(colors.indexOf("roug"));

//!Objets
// const person = {
//   name: "foulan",
//   age: 27,
//   adresse:{
//     city: "tunis",
//     codePostal:2049
//   },
// };
// console.log(person);

// // // Modifier une propriété
// person.adresse.city = "Ariana";
// console.log(person);

// // // Supprimer une propriété
// delete person.age;
// console.log(person);

// // // Ajouter une propriété
// person.email = "m@gmail.com";
// console.log(person);

// // // ************ /!\ Tableau d'objets
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

// // function add(a, b) {
// //   return a + b;
// // }

// // console.log(typeof (add))
// // console.log(add)
