// variables
// entier -> 2,34,1
// booleen -> true, false
// nbre virgule 4.5, 4.67
// null
// 0
// chaine de caratere -> "hello world"
// function
// tableau

//var entier = 9;
//var chaine = 'ma valeur est egal a : ';
//var bool = true;

//console.log(chaine + entier + bool);

var tableau = [100, 'hello', 34];
console.log(tableau[1]);

// operateurs
// +
// -
// *
// / 
// ==
// ===
// !=
// >
// >=
// <
// <=

var a = 10;
var b = 5;

console.log(a != b);


// conditions

/*
&& 
||

*/

/* var moyenne = 9;

if(moyenne > 10){
    console.log("Bravo tu valide ton annee !");
}
else if(moyenne == 10){
    console.log("tu valide ton annee de justesse !!");
}
else{
    console.log("tu ne valide pas ton annee");
} 
*/

var temp = 29;
var eau = 21;

if(temp > 25 || eau > 22){
    console.log("allons a l'eau !");
}
else if(temp < 25 && eau < 22){
    console.log("il fait un peu froid");
}
else{
    console.log("nous ne sont pas a la mer")
}



// boucles

for(var i = 0; i < 10; i++){
    console.log(i);
}

var tableau = ["fatoumata", "alioune", "aminata", "jacque"];

for(var i = 0; i < tableau.length; i++){
    console.log(tableau[i]);
}

var i = 0;
while(i < 10){
    i++;
    console.log(i);
}


// fonctions

function adders(a, b){
    return a + b;
}
console.log(adders(4, 44));

function carre(nombre){
    return nombre * nombre;
}
console.log(carre(8));

function estPair(nbre){
    if(nbre % 2 == 0){
        console.log("le nombre est pair");
    }
    else{
        console.log("le nombre est impair")
    }
    
}

estPair(10);



console.log(document);

var div = document.querySelector('#hello');

div.innerHTML = "hello world";


var p = document.getElementById('paragraphe');
p.style.color = 'red';


var btn = document.getElementById('btn');
btn.onclick = function(){
    var carre = document.querySelector('.blue');
    carre.classList.toggle('red');
}