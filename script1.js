
//Armo la lista de lineas de credito disponibles

const listaLineas = [ "Adquisición Vivienda", "Construcción"];

//Agrego una nueva linea al final (push) porque en orden de prioridad (monto a prestar) es la menos importante

listaLineas.push("Construcción con Terreno");

//elimino la linea adquisición porque voy a generar 2 lineas una para vivienda usada y una para nueva

listaLineas.shift();

listaLineas.unshift("Adquisición Vivienda Nueva","Adquisición Vivienda Usada");

//verifico como queda mi lista final

console.log(listaLineas);

// Lineas, condiciones y documentacion 

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
        comprobanteDomicilio: "Comprobante Domicilio",
        recibosDeSueldo: "12 Recibos De Sueldo",
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
        comprobanteDomicilio: "Comprobante Domicilio",
        recibosDeSueldo:  "12 Recibos De Sueldo",
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
        comprobanteDomicilio:  "No necesita comprobante de domicilio",
        recibosDeSueldo:  "9 Recibos De Sueldo",
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
        comprobanteDomicilio:  "No necesita comprobante de domicilio",
        recibosDeSueldo: "9 Recibos De Sueldo",
        docTecnica : "Escritura, plano y Proyecto de Obra"
    },
 ];

 
//genero con un spread de objetos la informacion financiera de las lineas
//guardo objeto con JSON para mostrar
const linea1 = {nombre:"Adquisición Vivienda Nueva", tasa: 15, CFT: 60 };
const linea1Json = JSON.stringify(linea1);
const linea2 = {...linea1, nombre:"Adquisición Vivienda Usada"};
const linea2Json = JSON.stringify(linea2);
const linea3 = {...linea1,nombre:"Construcción", tasa: 10,  CFT: 55};
const linea3Json = JSON.stringify(linea3);
const linea4 = {...linea3,nombre:"Construcción con Terreno"};
const linea4Json = JSON.stringify(linea4);

//Pop up con obras terminadas

const testimonios= document.getElementById("testimonios");
testimonios.innerHTML="<h1>Obras Terminadas</h1>";

testimonios.onclick=()=>{
    let imagenes = document.createElement("img");
    imagenes.setAttribute("src","./img/Testimonios.png");
    testimonios.appendChild(imagenes);
    setTimeout(()=> {
        testimonios.removeChild(imagenes);
    },2000);}

//Generacion de usuario e inicio de sesión 

const logusuarios = []; 

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
            <form  id="logueo"> 
                     <p> 
                        <input type="text" placeholder="Nombre y Apellido" name="nombre" id="nombre"/>
                    </p>
                      <p> 
                        <input type="text" placeholder="nombre usuario" name="usuario1" id="usuario"/>
                    </p>
                    <p> 
                        <input type="phone" placeholder="telefono" name="phone" id="phone"/>
                    </p>
                    <p> 
                        <input type= "email" placeholder="mail@mail.com" name="email" id="email">
                    </p>
                    <p> 
                        <input ype="password" placeholder="password"name="password" required="required" t id="password"  /> 
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


function store(){
    let nombre=document.getElementById("nombre").value;
    let usuario=document.getElementById("usuario").value;
    let phone=document.getElementById("phone").value;
    let email=  document.getElementById("email").value;
    let password=  document.getElementById("password").value;   
    if (usuario=="" || email=="" || nombre==""|| phone==""|| password==""){
     Swal.fire({ icon: 'error', title: 'Oops...', text: 'Por favor ingrese, nombre, usuario, telefono email y contraseña',
    footer: '<a href="">Why do I have this issue?</a>'}) }
    else {
        logusuarios.push({ nombre: nombre, usuario: usuario, phone: phone, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(logusuarios)); 
        document.getElementById("logueo").submit();
    }   
}

//imagen de lineas disponibles

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
        `;
        lineas.appendChild(card);
    }

//desestructuro el array de lineas para quedarme con las 2 recomendadas del mes

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

let titulo=document.getElementById("tituloCondiciones");
titulo.innerText="Condiciones de las lineas";
tituloCondiciones.className = "textCenter tamañoTitulos margenCards";

//Muesto las condiciones de cada linea con un modal

let lista = document.createElement("div");
let index = 0; 


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
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal1_${index}">
                    Mas info
                    </button>
                    <!-- Modal -->
                        <div class="modal fade" id="Modal1_${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        index++;
    }


let insertaLista=document.getElementById("lista");
insertaLista.appendChild(lista);
lista.className= "alineaCards";

//Condiciones financieras clientes y clientela general
//clientes

let financiero = document.createElement("div");
financiero.className= "alineaCards";

function obtenerTasas(){
    const URLJSON="/tasas.json";
    fetch(URLJSON)
        .then(resultado => resultado.json())
        .then(data => {            
            for (const tasa of data){
                let tasaclientes = document.createElement("div");
                tasaclientes.innerHTML +=`
                <div class="container-fluid">
                    <div class="row">
                        <div class="alineaCards2" >
                            <div class="col-md-12">
                                <div class="card card-body margenCards">
                                    <div class="textCenter">
                                        <span class="card-title tamañoTitulos2 ">${tasa.nombre}</span>
                                    </div>
                                 <ul>
                                    <li class="card-text alineaInfo botonSesion">Tasa Nominal Anual: ${tasa.tna} %</li>
                                    <li class="card-text alineaInfo botonSesion">Tasa Efectiva Mensual: ${tasa.tem} %</li>
                                    <li class="card-text alineaInfo botonSesion">Costo Financiero Total:  ${tasa.cft} %</li>
                                </ul>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            financiero.appendChild(tasaclientes);
            };
        let insertaTasa=document.getElementById("tasaClientes");
        insertaTasa.appendChild(financiero);
        })
        .catch((error) =>{
            console.log("Error")
        })
}

obtenerTasas();

let financiero2 = document.createElement("div");
financiero2.className= "alineaCards";

function obtenerTasas2(){
    const URLJSON2="/tasas2.json";
    fetch(URLJSON2)
        .then(resultado2 => resultado2.json())
        .then(data => {
             for (const tasa of data){
                let tasaclientes2 = document.createElement("div");
                tasaclientes2.innerHTML +=`
                <div class="container-fluid">
                    <div class="row">
                        <div class="alineaCards3" >
                            <div class="col-md-12">
                                <div class="card card-body margenCards">
                                    <div class="textCenter">
                                        <span class="card-title tamañoTitulos2 ">${tasa.nombre}</span>
                                    </div>
                                 <ul>
                                    <li class="card-text alineaInfo botonSesion">Tasa Nominal Anual: ${tasa.tna} %</li>
                                    <li class="card-text alineaInfo botonSesion">Tasa Efectiva Mensual: ${tasa.tem} %</li>
                                    <li class="card-text alineaInfo botonSesion">Costo Financiero Total:  ${tasa.cft} %</li>
                                </ul>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            financiero2.appendChild(tasaclientes2);
            };
            let insertaTasa2=document.getElementById("tasaGenerales");
            insertaTasa2.appendChild(financiero2);
        })
        .catch((error) =>{
            console.log("Error")
        })
}

obtenerTasas2();



//pedimos al cliente que ingrese la linea que le interesa, sus datos y se calcula su cuota

let boton = document.getElementById("miBoton");
boton.onmouseover = () =>{
    boton.className="btn btn-primary";
}

boton.onmouseout = () => {
    boton.className="btn btn-dark";
}

let select = document.getElementById("selectNumber");
    for(let i = 0; i < listaLineas.length; i++) { 
        let opt = listaLineas[i];
        select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>"; 
    }


let slcchange = document.getElementById("selectNumber");
slcchange.addEventListener("change", function() {
    console.log()
});

function calcular(e) {
    e.preventDefault();
    let cuota = 0; 
    let oferta = document.getElementById("oferta"); 
    let done=0;
    let lineaElegida = slcchange.value;
    let ingreso = document.getElementById("ingreso").value;
    let tasaInteres = document.getElementById("tasaInteres").value;
    let antiguedad = document.getElementById("antiguedad").value;
    let capital = document.getElementById("capital").value;
    let plazo = document.getElementById("plazo").value;
    formulario.reset();
    //incorporo operador AND
    (!ingreso || !antiguedad || !lineaElegida || !capital || !tasaInteres || !plazo) && Swal.fire({
        icon: 'error',
        text: 'Por favor, complete los campos',
    });
    
    let msj = "";

    if (ingreso < 20000 && antiguedad < 3) {
        msj ="No califica para esta linea";
    }else if (ingreso < 1000000 && antiguedad >= 3){
        cuota = ((capital / plazo / 12) * (1 + (tasaInteres/100))).toFixed(2);
        msj= "La cuota mensual sera de $ " + cuota;
    }
    else {
        msj = "Comunicate con un representate para revisar tu caso";
    }
    let h4 = document.createElement("h4");
    h4.innerHTML = msj;
    oferta.innerHTML = ""; 
    oferta.prepend(h4); 
    localStorage.setItem("cuota", cuota); 

};


const opcionTasa = document.getElementById("tasaInteres")
opcionTasa.addEventListener('mousemove', () => {
    Swal.fire({
      title: 'Atención!!!',
      text: 'Ingresa la TASA segun tu condición (Cliente/No Cliente) y linea de interes',
     
    })
})

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", calcular );

//Confirma si le interesa oferta


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

