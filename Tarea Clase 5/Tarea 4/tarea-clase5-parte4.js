//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."    

const miLista = document.querySelectorAll("#mi-lista li");
let suma = 0
let numeros = [];

for(let i = 0; i < miLista.length; i++) {
    let numero = parseInt(miLista[i].textContent);
    numeros.push(numero);
    suma += numero;
  } 

const frecuenciaNumeros = {};
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    frecuenciaNumeros[numero] = (frecuenciaNumeros[numero] || 0) + 1;
  }
  
let numeroMasFrecuente;
let frecuenciaMasAlta = 0

for (const numero in frecuenciaNumeros) {
    if (frecuenciaNumeros[numero] > frecuenciaMasAlta) {
      numeroMasFrecuente = numero;
      frecuenciaMasAlta = frecuenciaNumeros[numero];
    }
  }
const promedio = suma / miLista.length;

const numeroMenor = document.querySelector('label[for="numero-menor"] em');
numeroMenor.textContent = `El numero menor es: ` + Math.min(...numeros);

const numeroMayor = document.querySelector('label[for="numero-mayor"] em');
numeroMayor.textContent = `El numero mayor es: ` + Math.max(...numeros);

const promedioList = document.querySelector('label[for="promedio"] em');
promedioList.textContent = `El promedio es: ${promedio}`; 

const numeroFrecuente = document.querySelector('label[for="numero-frecuente"] em');
numeroFrecuente.textContent = `El numero mas frecuente es: ${numeroMasFrecuente}`;
