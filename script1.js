
//Armo la lista de lineas de credito disponibles

const listaLineas = [ "Adquisición Vivienda", "Construcción"];
console.log(listaLineas);

//Agrego una nueva linea al final (push) porque en orden de prioridad (monto a prestar) es la menos importante

listaLineas.push("Construcción con Terreno");
console.log(listaLineas);

//elimino la linea adquisición porque voy a generar 2 lineas una para vivienda usada y una para nueva

listaLineas.shift();

listaLineas.unshift("Adquisición Vivienda Nueva","Adquisición Vivienda Usada");

//verifico como queda mi lista final

console.log(listaLineas);

//tengo que ver como sumar esto en la pagina en la ubicacion que quiero!!
document.write("<p> Tenemos " + listaLineas.length + " lineas de creditos disponibles para ofrecerte: " + listaLineas.join(", ") +"</p>" );

// Dejo en la consola la lista de lineas y condiciones para luego impactarlas en el HTML y que el cliente pueda saber 
// y elegir cual le interesa y si califica, para luego ingresar en el calculador y saber cual seria su cuota

const listaCondiciones=[
    {
        nombre: "Adquisición Vivienda Nueva",
        montoMaximo: 10000000,        
        ingresoMinimo: 40000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximoMeses: 240,
        img:"./img/compraviviendanueva.jpg"
    },
    {
        nombre: "Adquisición Vivienda Usada",
        montoMaximo: 7000000,
        ingresoMinimo: 30000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximoMeses: 240,
        img:"./img/compraviviendausada-min.jpg"
    },
    {
        nombre: "Construcción",
        montoMaximo: 5000000,
        ingresoMinimo: 20000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximoMeses: 240,
        img: "./img/construccion-min.jpg"
    },
    {
        nombre: "Construcción con Terreno",
        montoMaximo: 7500000,
        ingresoMinimo: 35000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximoMeses: 240,
        img: "./img/construccionconterreno-min.jpg"
    },
 ];


//pongo en el HTML las lineas que tengo disponibles

//Accedo al DOM a traves del ID
let lineas = document.createElement("div");
lineas.className="card textCenter alineaCards";


//ver como sumar la imagen y que no se arruine el formato!!!

    //Para cada linea del array voy a tener una card
    for (const linea of listaCondiciones){
        let card = document.createElement("div");
        card.innerHTML = `
            <div class="container-fluid">
                <div class="row">
                    <div class="alineaCards  margenCards">
                            <div class="card card-img-top">
                                <div class="card-body">
                                    <p class="card-title tamañoTitulos2">${linea.nombre}</p>
                                    <img src="${linea.img}" class="card-img-top" alt="${linea.nombre}">
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        `;
        lineas.appendChild(card);
    }


let insertaLineas=document.getElementById("lineas");
insertaLineas.appendChild(lineas);

//le inserto formato al titulo de condiciones y le cambio el texto
    let titulo=document.getElementById("tituloCondiciones");
    titulo.innerText="Condiciones de las lineas";
    tituloCondiciones.className = "textCenter tamañoTitulos margenCards";




//tabla para condiciones de cada linea

let lista = document.createElement("div");

//Para cada linea del array voy a tener una box
    for (const producto of listaCondiciones){
        let box = document.createElement("div");
        box.innerHTML = `
        <div class="container-fluid">
            <div class="row">
            <div class="alineaCards">
            <div class="col-md-12">
                <div class="card card-body margenCards">
                    <div class="textCenter">
                        <span class="card-title tamañoTitulos2 ">${producto.nombre}</span>
                    </div>
                    <ul>
                        <li class="card-text alineaInfo">Edad entre ${producto.edadMinima} y ${producto.edadMaxima}</li>
                        <li class="card-text alineaInfo">Plazo ${producto.plazoMinimoMeses} & ${producto.plazoMaximoMeses} meses</li>
                        <li class="card-text alineaInfo">Financiación hasta $ ${producto.montoMaximo}</li>
                        <li class="card-text alineaInfo">Ingreso minimo $ ${producto.ingresoMinimo}</li>
                    </ul>
                    <button>Más info</button>
                </div>
            </div>
            </div>
            </div>
        </div>
        `;
        lista.appendChild(box);
    }


let insertaLista=document.getElementById("lista");
insertaLista.appendChild(lista);

lista.className= "alineaCards";



//pedimos al cliente que ingrese la linea que le interesa y calcule su cuota

let boton = document.getElementById("miBoton");
boton.addEventListener("click", calcular);

boton.onmouseover = () =>{
    boton.className="btn btn-primary";
}

boton.onmouseout = () => {
    boton.className="btn btn-dark";
}

let campoIngreso = document.getElementById("ingreso");
let campoAntiguedad = document.getElementById("antiguedad");
let campoCapital = document.getElementById("capital");
let campoPlazo = document.getElementById("plazo");
//let Interes = 0.2; ver como definirlo para que lo tome

function calcular (capital, Interes, plazo){ 
    if (campoIngreso.value < 20000 && campoAntiguedad.value < 3) {
        document.write("<h4> No califica para esta linea </h4>");
    }else if (campoIngreso.value >= 20000 && campoIngreso.value < 1000000 && campoAntiguedad.value >= 3){
        let cuota = ((campoCapital.value / campoPlazo.value / 12) * (1 + 0.2)).toFixed(2);
        document.write("<h4> La cuota Mensual sera de " + cuota + "</h4>");
    }
    else {
        document.write("Comunicate con un representate para revisar tu caso");
    }
};


//Controla que haya completado datos del formulario (sean numero y no esten vacios)

let formulario      = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    if(isNaN(campoIngreso.value)||(campoIngreso.value=="")||isNaN(campoAntiguedad.value)||(campoAntiguedad.value=="")||isNaN(campoCapital.value)||(campoCapital.value=="")||isNaN(campoPlazo.value)||(campoPlazo.value=="")){
        e.preventDefault();//Cancelamos el comportamiento del evento y evita que se borren los campos
        alert("Los datos ingresados son incorrectos");
    }
}


//A sumar boton me interesa derive en un formulario de carga de datos para contacto
