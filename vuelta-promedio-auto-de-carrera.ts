/*
Problema: Autos de Carrera

•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta
*/

let readlineSync = require('readline-sync');
let primerVuelta: number = readlineSync.question("Ingrese el tiempo de la primer vuelta: ");
let segundaVuelta: number = readlineSync.question("Ingrese el tiempo de la segunda vuelta: ");
let terceraVuelta: number = readlineSync.question("Ingrese el tiempo de la tercera vuelta: ");
let cuartaVuelta: number = readlineSync.question("Ingrese el tiempo de la cuarta vuelta: ");


let tiempoTotal: number = primerVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
let promedio: number = tiempoTotal / 4;


console.log("El tiempo total de las vueltas es: " + tiempoTotal);
console.log("El promedio de las vueltas es: " + promedio);
