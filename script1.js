
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

// Dejo en la consola la lista de lineas y condiciones para luego impactarlas en el HTML y que el cliente pueda saber 
// y elegir cual le interesa y si califica, para luego ingresar en el calculador y saber cual seria su cuota
//sumo lista de documentacion requerida 

const listaCondiciones=[
    {
        nombre: "Adquisición Vivienda Nueva",
        montoMaximo: 10000000,        
        ingresoMinimo: 40000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximoMeses: 240,
        img:"./img/compraviviendanueva.jpg",
        dni:"DNI",
        comprobanteDomicilio: "comprobanteDomicilio",
        recibosDeSueldo: "recibosDeSueldo",
        docTecnica: "Escritura y Boleto Compra-Venta"
    },
    {
        nombre: "Adquisición Vivienda Usada",
        montoMaximo: 7000000,
        ingresoMinimo: 30000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximoMeses: 240,
        img:"./img/compraviviendausada-min.jpg",
        dni: "DNI",
        comprobanteDomicilio: "comprobanteDomicilio",
        recibosDeSueldo: "recibosDeSueldo",
        docTecnica: "Escritura y Boleto Compra-Venta"
    },
    {
        nombre: "Construcción",
        montoMaximo: 5000000,
        ingresoMinimo: 20000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximoMeses: 240,
        img: "./img/construccion-min.jpg",
        dni: "DNI",
        comprobanteDomicilio: "comprobanteDomicilio",
        recibosDeSueldo: "recibosDeSueldo",
        docTecnica: "Escritura, plano y Proyecto de Obra"
    },
    {
        nombre: "Construcción con Terreno",
        montoMaximo: 7500000,
        ingresoMinimo: 35000,
        edadMinima: 18,
        edadMaxima: 70,
        plazoMinimoMeses: 120,
        plazoMaximoMeses: 240,
        img: "./img/construccionconterreno-min.jpg",
        dni: "DNI",
        comprobanteDomicilio: "comprobanteDomicilio",
        recibosDeSueldo: "recibosDeSueldo",
        docTecnica : "Escritura, plano y Proyecto de Obra"
    },
 ];


//pongo en el HTML las lineas que tengo disponibles

//Accedo al DOM a traves del ID
let lineas = document.createElement("div");
lineas.className="card textCenter alineaCards";

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

//desestructuro el array de lineas para quedarme con las 2 recomendadas del momento

let insertaLineas=document.getElementById("lineas");
const p = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const h3 = document.createElement("h3");
const [a,,b] = listaLineas;
h3.innerText = `Lineas recomendadas del mes`
p2.innerText = a
p3.innerText = b
p.innerHTML = `Tenemos ${listaLineas.length} lineas de creditos disponibles para ofrecerte`
p.className= "textCenter tamañoTitulos";
h3.className= "textCenter tamañoTitulos2";
p2.className= "textCenter";
p3.className= "textCenter";
insertaLineas.appendChild(p);
insertaLineas.appendChild(h3);
insertaLineas.appendChild(p2);
insertaLineas.appendChild(p3);
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
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal1">
                    Mas info
                    </button>
                    <!-- Modal -->
                        <div class="modal fade" id="Modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Requisitos y Documentacion ${producto.nombre}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                               <ul>
                                    <li class="card-text alineaInfo">Edad Minima ${producto.edadMinima}</li>
                                    <li class="card-text alineaInfo">Edad Maxima ${producto.edadMaxima}</li>
                                    <li class="card-text alineaInfo">Plazo Minimo ${producto.plazoMinimoMeses}  meses</li>
                                    <li class="card-text alineaInfo">Plazo Maximo ${producto.plazoMaximoMeses} meses</li>
                                    <li class="card-text alineaInfo">Financiación hasta $ ${producto.montoMaximo}</li>
                                    <li class="card-text alineaInfo">Ingreso minimo $ ${producto.ingresoMinimo}</li>
                                    <li class="card-text alineaInfo"> Documentacion Personal: ${producto.dni}</li>
                                    <li class="card-text alineaInfo"> Documentacion Personal2: ${producto.comprobanteDomicilio}</li>
                                    <li class="card-text alineaInfo"> Documentacion Laboral:  ${producto.recibosDeSueldo}</li>        
                                    <li class="card-text alineaInfo"> Documentacion Tecnica:  ${producto.docTecnica}</li>  
                                </ul>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
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


boton.onmouseover = () =>{
    boton.className="btn btn-primary";
}

boton.onmouseout = () => {
    boton.className="btn btn-dark";
}


function calcular (e){
    e.preventDefault();
    let done=0;
    let ingreso = document.getElementById("ingreso").value;
    let antiguedad = document.getElementById("antiguedad").value;
    let capital = document.getElementById("capital").value;
    let plazo = document.getElementById("plazo").value;
    formulario.reset();
    //incorporo operador AND
    (!ingreso || !antiguedad || !capital || !plazo) && Swal.fire({
  icon: 'error',
  text: 'Por favor, complete los campos',
});
    
    let msj = "";

    if (ingreso < 20000 && antiguedad < 3) {
        msj ="No califica para esta linea";
    }else if (ingreso < 1000000 && antiguedad >= 3){
        let cuota = ((capital / plazo / 12) * (1.2)).toFixed(2);
        msj= "La cuota mensual sera de " + cuota;
    }
    else {
        msj = "Comunicate con un representate para revisar tu caso";
    }
    let h4 = document.createElement("h4");
    h4.innerHTML = msj;
    document.getElementById("oferta").prepend(h4);
    localStorage.setItem("cuota", cuota.value);
};

//Controla que haya completado datos del formulario (sean numero y no esten vacios)

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", calcular );


//genero con un spread de objetos la informacion financiera de las lineas
//guardo objeto con JSON para mostrar
const linea1 = {nombre:"Adquisición Vivienda Nueva", tasa: 25, CFT: 90 };
const linea1Json = JSON.stringify(linea1);

console.log(linea1Json);
const linea2 = {...linea1, nombre:"Adquisición Vivienda Usada"};
const linea2Json = JSON.stringify(linea2);
const linea3 = {...linea1,nombre:"Construcción", tasa: 20};
const linea3Json = JSON.stringify(linea3);
const linea4 = {...linea3,nombre:"Construcción con Terreno", CFT: 75};
const linea4Json = JSON.stringify(linea4);

let condicionesFinancieras=document.getElementById("financiacion");

const fp1 = document.createElement("p");
const fp2 = document.createElement("p");
const fp3 = document.createElement("p");
const fp4 = document.createElement("p");
const fh3 = document.createElement("h3");

fh3.innerText = `Condiciones Financieras clientela general`
fp1.innerText = linea2Json
fp2.innerText = linea2Json
fp3.innerText = linea3Json
fp4.innerText = linea4Json

fh3.className= "textCenter tamañoTitulos2";

condicionesFinancieras.appendChild(fh3);
condicionesFinancieras.appendChild(fp1);
condicionesFinancieras.appendChild(fp2);
condicionesFinancieras.appendChild(fp3);
condicionesFinancieras.appendChild(fp4);
//condicionesFinancieras.appendChild(financiacion);


//Login para que le quede registrada la cuota que calculo (me sale como undefined, porque?)
//guarda los datos pero los pierdo cuando refresco la sesion (porque?)
//no me deja guardar mas de un usuario  (como sumo mas usuarios?)


 function store(){
    let usuario=document.getElementById("nombre").value;
    let email=  document.getElementById("email").value;
    let password=  document.getElementById("password").value;
    let inputUsuario= document.getElementById("nombre");
    localStorage.setItem("nombre", inputUsuario.value);
    let inputPassword= document.getElementById("password");
    localStorage.setItem("password", inputPassword.value);
    let inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);     
    (usuario=="" || email=="" || password=="")? Swal.fire({ icon: 'error', title: 'Oops...', text: 'Por favor ingrese, nombre, email y contraseña',
    footer: '<a href="">Why do I have this issue?</a>'}) : document.getElementById("login").submit();
}

const btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {
    Swal.fire({
      title: 'Iniciar Sesión',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
          Swal.showValidationMessage(`Ingrese usuario y contraseña`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire(`
        Login: ${result.value.login}
        Password: ${result.value.password}
      `.trim())
    })
})

const btn2 = document.querySelector('#myBtn2')
btn2.addEventListener('click', () => {
 Swal.fire({
      title: 'Genera tu usuario en Compra Tu hogar',
      html:` <div>
            <form  id="login"> 
                     <p> 
                        <input type="text" placeholder="Nombre y Apellido" name="nombre" id="nombre"/>
                    </p>
                      <p> 
                        <input type="text" placeholder="AAAA555" name="usuario1" id="usuario1"/>
                    </p>
                    <p> 
                        <input type="phone" placeholder="1511111111" name="phone" id="phone"/>
                    </p>
                    <p> 
                        <input type= "email" placeholder="mail@mail.com" name="email" id="email">
                    </p>
                    <p> 
                        <input ype="password" placeholder="1111ABCD"name="password" required="required" t id="password"  /> 
                    </p>
                    <p> 
                        <button onclick="store()" class="btn btn-outline-secondary" type="button">Genera tu usuario</button>
                    </p>
                  </form>
            </div>`,
      position: 'top-end',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInRight
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutRight
          animate__faster
        `
      },
      grow: 'column',
      width: 300,
      showConfirmButton: false,
      showCloseButton: true
    })
})


//interesa oferta


const interesaOferta = document.getElementById('interes')
interesaOferta.addEventListener('click', () => {
    Swal.fire({
      title: 'Bienvenido!!!',
      text: 'Estas un paso mas cerca de tu casa, te vamos a contactar dentro de las 48 hs',
      imageUrl:"./img/oferta.jpg",
      imageWidth: 200,
      imageHeight: 198,
      imageAlt: 'Custom image',
    })
})

//sumo un pop up con obras terminadas

const testimonios= document.getElementById("testimonios");
testimonios.innerHTML="<h1>Obras Terminadas</h1>";

testimonios.onclick=()=>{
    let imagenes = document.createElement("img");
    imagenes.setAttribute("src","./img/Testimonios.png");
    testimonios.appendChild(imagenes);
    setTimeout(()=> {
        testimonios.removeChild(imagenes);
    },2000);}



//fetch GET y ruta local


function obtenerTasas(){
    const URLJSON="/tasas.json";
    fetch(URLJSON)
        .then((resultado) => resultado.json())//primera promesa
        .then( (data) =>{
            let tasas = data.listaTasas;
            for (const tasaLinea of tasas){
                let financiero = document.getElementById("tasas");
                financiero.innerHTML =`
                <h3 class="textCenter tamañoTitulos margenCards" >Condiciones Financieras para clientes Plan Sueldo</h3>
                 <ul>
                    <li class="card-text alineaInfo botonSesion">${tasaLinea.nombre}</li>
                    <li class="card-text alineaInfo botonSesion">Tasa Nominal Anual: ${tasaLinea.tna} %</li>
                    <li class="card-text alineaInfo botonSesion">Tasa Efectiva Mensual: ${tasaLinea.tem} %</li>
                    <li class="card-text alineaInfo botonSesion">Costo Financiero Total:  ${tasaLinea.cft} %</li>
                </ul>

                 `
            };
            lista.appendChild(financiero);
        })
        .catch((error) =>{
            console.log("Error")
        })
}
obtenerTasas();



//Pendientes

//modal BS para las condiciones de cada producto ok, pero me vincula a todos las mismas condiciones.
//"me interesa" disparar correo para contactar al cliente
//le da calcular y acumula los resultados en el mensaje del html (reset no sirve)
//calcular intereses del array