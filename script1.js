

//Armo la lista de lineas de credito disponibles

const listaLineas = [ "Adquisición Vivienda", "Construcción", "Construcción con Terreno", "Refacción", "Ampliación"];
console.log(listaLineas);

//Agrego una nueva linea al final (push) porque en orden de prioridad (monto a prestar) es la menos importante

listaLineas.push("Materiales");
console.log(listaLineas);

//elimino la linea adquisición porque voy a generar 2 lineas una para vivienda usada y una para nueva

listaLineas.shift();

listaLineas.unshift("Adquisición Vivienda Nueva","Adquisición Vivienda Usada");

//verifico como queda mi lista final

console.log(listaLineas);

for (let i = 0; i < listaLineas.length; i++) {
    console.log("Linea " + (i+1) + " : " + listaLineas[i]);
}

//creo 2 lista para mostrar prestamos Hipotecarios con Hipoteca x un lado y prestamos personales por otro

const listaHipotecarios = listaLineas.slice(0,4);

//busco que n° de indice es Refacción para armar la de personales
console.log( listaLineas.indexOf("Refacción"));//4

const listaPersonales = listaLineas.slice(4,7);

// Dejo en la consola la lista de lineas y condiciones para luego impactarlas en el HTML y que el cliente pueda saber 
// y elegir cual le interesa y si califica, para luego ingresar en el calculador y saber cual seria su cuota

const listaCondiciones=[
    {
        linea: "Adquisición Vivienda Nueva",
        montoMinimo: 1500000,
        montoMaximo: 10000000,
        ingresoMinimo: 40000,
        ingresoMaximo: 3000000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximaMeses: 240
    },
    {
        linea: "Adquisición Vivienda Usada",
        montoMinimo: 1000000,
        montoMaximo: 7000000,
        ingresoMinimo: 30000,
        ingresoMaximo: 3000000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximaMeses: 240
    },
    {
        linea: "Construcción",
        montoMinimo: 800000,
        montoMaximo: 5000000,
        ingresoMinimo: 20000,
        ingresoMaximo: 3000000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximaMeses: 240
    },
    {
        linea: "Construcción con Terreno",
        montoMinimo: 1200000,
        montoMaximo: 7500000,
        ingresoMinimo: 35000,
        ingresoMaximo: 3000000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximaMeses: 240
    },
        {
        linea: "Refacción",
        montoMinimo: 30000,
        montoMaximo: 100000,
        ingresoMinimo: 20000,
        ingresoMaximo: 3000000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 48,
        plazoMaximaMeses: 96
    },
    {
        linea: "Ampliación",
        montoMinimo: 100000,
        montoMaximo: 3000000,
        ingresoMinimo: 50000,
        ingresoMaximo: 3000000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 48,
        plazoMaximaMeses: 120
    },
    {
        linea: "Materiales",
        montoMinimo: 50000,
        montoMaximo: 500000,
        ingresoMinimo: 20000,
        ingresoMaximo: 3000000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 24,
        plazoMaximaMeses: 60
    },
]

for (const linea of listaCondiciones){
console.log(linea);
}


listaCondiciones.forEach((lineas) =>{
    console.log("Lineas disponibles " + lineas.linea);
})

//busco si existe alguna linea a menos de 10 años

//le pido ingreso minimo

let plazoDeInteres = listaCondiciones.find((lineas) => lineas.plazoMinimoMeses <=120);

//en HTML la idea es mostrarle a cual puede acceder

console.log(plazoDeInteres);


//busco a que lineas puede acceder la persona con su ingreso (menor a 50.000 x ej)

//le pido ingreso minimo

let ingresoMinimo = parseInt(prompt("Ingreso Minimo"));

let lineasCalifica = listaCondiciones.filter((lineas) => lineas.montoMinimo <=ingresoMinimo);

//en HTML la idea es mostrarle a cual puede acceder

console.log(lineasCalifica);

//Genero la info para que el usuario las vea

alert("Tenemos " + listaLineas.length + " lineas de creditos disponibles para ofrecerte: " + listaLineas.join(", "));

 document.write("<h2> Tenemos " + listaLineas.length + " lineas de creditos disponibles para ofrecerte: " + listaLineas.join(", ") +"</h3>" );

alert("Estas lineas son con Hipoteca: " + listaHipotecarios);
alert("Estas lineas son con Pagaré: "+ listaPersonales);


//Le consultamos que esta buscando para saber si tenemos esa linea
//armo un array para la tasa que mantiene el orden de la lista de las lineas
const tasaInteres = [25, 30, 22,26, 40, 46, 50];

let linea=prompt("Que linea te interesa");
let check = listaLineas.indexOf(linea);

if(check != -1){
    alert("Tenemos una linea para " + linea + " con una tasa del " + tasaInteres[check] + "% anual que puede servirte");
}else{
    alert("Por el momento no contamos con una linea que pueda servirte")
}

//pedimos al cliente que ingrese la linea que le interesa y calcule su cuota

function calcular(capital, Interes, anos) {

    let cuota = ((capital / anos / 12) * (1 + Interes)).toFixed(2);

    alert("Para un prestamo de " + capital + " a " + (anos * 12) + " meses y una tasa del 20%, su cuota mensual sera de " + cuota);

    document.write("<h4> La cuota Mensual sera de " + cuota + "</h4>");

}


for (let i = 1; i <= 10; i++) {

    let IngresoNetoFamiliar = parseInt(prompt("Ingreso Neto Familiar"));

    let AntiguedadLaboral = parseInt(prompt("Antiguedad Laboral"));

    if (IngresoNetoFamiliar < 20000 && AntiguedadLaboral < 3) {

        alert("No califica para esta linea");

        break;

    }

    else if (IngresoNetoFamiliar >= 20000 && IngresoNetoFamiliar < 1000000 && AntiguedadLaboral >= 3) {

        let capital = prompt("Introduzca el monto del prestamo a solicitar \n Monto minimo 2000000\n Monto máximo 10000000");

        let Interes = 0.2;

        let anos = prompt("Lo va a pagar en 10 o 20 años");

        calcular(capital, Interes, anos);

        continue;

    }

    else {

        alert("Comunicate con un representate para revisar tu casa");

        break;

    }

}
