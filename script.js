const numeros= [1]

console.log (numeros.length)


numeros.push(1);
numeros.push(2);

console.log (numeros.length)

function sumar (a,b) {
    const resultado = a + b;
    console.log (resultado);
}

const sumarVersionDos = (a,b) => {
    const resultado = a + b;
    console.log (resultado);
}

sumar (1,5);
sumar (2,3);

sumarVersionDos (8,1)

const multiplicacion = (a,b) => {
    const resultado = a*b;
    return resultado;
}

const resultadoOperacion = multiplicacion (2,3);
console.log (resultadoOperacion);


// explicacion

mostrarNombre ("Juan");

const retonarNombre = (nombre) => {
    return "Hola " + nombre;
}

const nombreEsperado = retornarNombre ("Pedro");
console.log (nombreEsperado);

//Taller en clase
const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function numerosMen8 (arreglo) {
    return arreglo.length (numero => numero <8)
}

function numerosIgMa8 (arreglo){
    return arreglo.length (numero => numero >=8)
}