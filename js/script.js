// Función que determine si un año es bisiesto.
function esBisiesto(anio){
    if ((anio % 4 === 0) && ((anio % 100 !== 0) || (anio % 400 === 0))) {
        return true;
    } else {
        return false;
    }
}

// Función que convierta grados Celsius a Fahrenheit.
function celsiusAFahrenheit(celsius){
    return (1.8*celsius)+32
}

//Función que devuelva el mayor de dos números.
function mayorDeDos(n1,n2){
    if(n1>n2){
        return n1;
    }
    else{
        return n2;
    }
}

// Función que convierta una cantidad de minutos en una cadena que indiquecuántas horas y minutos corresponden.
function convertirMinutos(minutos){
    horasCalculadas = Math.floor(minutos/60);
    minutosRestantes = minutos % 60;
    return `${horasCalculadas} Horas y ${minutosRestantes} Minutos`;
}

// Función que determine si un número está dentro de un rango dado (incluyendo los límites).
function estaEnRango(numero, inicio, fin){
    if(numero>=inicio && numero<=fin){
        return " Es " + true;
    }
    else{
        return  " Es " + false;
    }
}

// Función que calcule el precio final después de aplicar un porcentaje dedescuento a un precio inicial.
function calcularPrecioFinal(precioInicial, descuento){
    return precioInicial - (precioInicial * (descuento/100));
}

// Función que determine si una persona puede votar según su edad.
function puedeVotar(edad){
    if(edad>=18){
        return "Puede Votar " + true
    }
    else{
        return "No puede votar " + false
    }
}

// Función que calcule el área de un triángulo dados su base y altura.
function calcularAreaTriangulo(base,altura){
    return (base*altura)/2
}

let opcionUsuarioNumero;

do {
    let opcionUsuarioTexto = prompt(`
    ############ MENU DE OPCIONES  ############
    
    1. Año es Bisiesto
    2. Grados Celsius a Fahrenheit.
    3. Mayor de dos números.
    4. Horas y Minutos
    5. Número está dentro de un rango.
    6. Precio final después de aplicar descuento.
    7. Persona puede votar según su edad.
    8. Área de un triángulo
    9. Salir

    ###########################################
    Por favor, elige una opción (ingresa el número):
    `);
    
    opcionUsuarioNumero = parseInt(opcionUsuarioTexto);

    switch(opcionUsuarioNumero){
        case 1:
            let aniodePrueba = prompt("Ingresa el año a verificar:");
            let aniodePruebaNum = parseInt(aniodePrueba)
            let mensajeResultado = "El año " + aniodePruebaNum + " ¿Es Bisiesto? " + esBisiesto(aniodePruebaNum);
            alert(mensajeResultado);
            break;
        case 2:
            let gradosCelsius = prompt("Ingresa los grados Celsius a convertir:");
            let gradosCelsiusNum = parseFloat(gradosCelsius);
            let mensajeResultadoDos = gradosCelsiusNum + " grados Celsius equivalen a " + celsiusAFahrenheit(gradosCelsiusNum) + " grados Fahrenheit.";
            alert(mensajeResultadoDos);
            break;
        case 3:
            let num1 = prompt("Ingresa el primer número:");
            let num2 = prompt("Ingresa el segundo número:");
            let num1Num = parseFloat(num1);
            let num2Num = parseFloat(num2);
            alert(`El número mayor entre ${num1Num} y ${num2Num} es: ${mayorDeDos(num1Num, num2Num)}`);
            break;
        case 4:
            let minutos = prompt("Ingresa la cantidad de minutos:");
            let minutosNum = parseInt(minutos);
            alert(`${minutosNum} minutos equivalen a: ${convertirMinutos(minutosNum)}`);
            break;
        case 5:
            let numero = prompt("Ingresa el número a verificar:");
            let inicio = prompt("Ingresa el valor inicial del rango:");
            let fin = prompt("Ingresa el valor final del rango:");
            let numeroNum = parseFloat(numero);
            let inicioNum = parseFloat(inicio);
            let finNum = parseFloat(fin);
            alert(`El número ${numeroNum} ${estaEnRango(numeroNum, inicioNum, finNum)} dentro del rango ${inicioNum} a ${finNum}.`);
            break;
        case 6:
            let precio = prompt("Ingresa el precio inicial:");
            let descuento = prompt("Ingresa el porcentaje de descuento:");
            let precioNum = parseFloat(precio);
            let descuentoNum = parseFloat(descuento);
            alert(`El precio final después de aplicar un ${descuentoNum}% de descuento es: $${calcularPrecioFinal(precioNum, descuentoNum)}`);
            break;
        case 7:
            let edad = prompt("Ingresa la edad:");
            let edadNum = parseInt(edad);
            alert(`Con una edad de ${edadNum}, ${puedeVotar(edadNum)}`);
            break;
        case 8:
            let base = prompt("Ingresa la base del triángulo:");
            let altura = prompt("Ingresa la altura del triángulo:");
            let baseNum = parseFloat(base);
            let alturaNum = parseFloat(altura);
            alert(`El área del triángulo con base ${baseNum} y altura ${alturaNum} es: ${calcularAreaTriangulo(baseNum, alturaNum)}`);
            break;
        case 9:
            alert("¡Hasta luego!");
            break;
        default:
            alert("Opción inválida. Por favor, elige un número del 1 al 9.");
            break;
    }
} while (opcionUsuarioNumero !== 9);