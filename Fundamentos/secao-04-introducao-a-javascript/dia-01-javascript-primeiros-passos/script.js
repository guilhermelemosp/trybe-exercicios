//const a = 10;
//const b = 5;

//if (a > b) {console.log ('a é maior que b');}
//else {console.log('b é maior que a')};//



//const a = 123;
//const b = 321;
//const c = 20;

//if (a > b && a > c ) {console.log ('o maior numero é: ' + a + ' (a)')}
//else if (b > a && b > c ) {console.log ('o maior numero é: ' + b + ' (b)')}
//else if (c > a && c > b ) {console.log ('o maior numero é: ' + c + ' (c)')}



//exercicio 3

//let number;

//if (number > 0) {console.log ('positive');}
//else if (number < 0) {console.log ('negative');}
//else {console.log ('zero')}

//exercicio 4

const a = 30;
const b = 75;
const c = -20;

let somaDasConst = a+b+c;
let allAnglesArePositive = a > 0 && b > 0 && c > 0;

if (allAnglesArePositive){
if (somaDasConst === 180) {console.log (true);}
else {console.log (false);}
}
else {console.log ('erro - ang invalido')};