
//Defino si por ingreso y antiguedad califica y su monto maximo.

let IngresoNetoFamiliar;
let AntiguedadLaboral;

for(let i=1; i<=10; i++){
    IngresoNetoFamiliar= parseInt(prompt("Ingreso Neto Familiar"));
    AntiguedadLaboral = parseInt(prompt("Antiguedad Laboral"));
    if(IngresoNetoFamiliar < 20000 && AntiguedadLaboral<3){
        alert("No califica para esta linea");
        break; 
    }
    else if(IngresoNetoFamiliar >=20000 && IngresoNetoFamiliar < 1000000 && AntiguedadLaboral>=3){
         let capital=prompt("Introduzca el monto del prestamo a solicitar \n Monto minimo 2000000\n Monto máximo 10000000");
         let Interes =  parseInt(0.2);
         let linea=prompt("Indique la linea que le interesa \n Construcción\n Compra Vivienda\n Construcción+Terreno"); //segun la linea va a ser el interes
         let anos=prompt("Lo va a pagar en 10 o 20 años");
         function calcular() {
            let cuota =  (capital / anos / 12 ) * ((1 + Interes))
             alert ("Para un prestamo de "+capital+ " a "+ (anos*12)+ " meses y una tasa del 20%, su cuota mensual sera de " + parseFloat(cuota)) ;
            document.write("<h3> La cuota Mensual sera de " +parseFloat(cuota) + "</h3>" )
            }
        calcular(); 
        break;
    }
    else alert("Comunicate con un representate para revisar tu casa");
    break; 
}
