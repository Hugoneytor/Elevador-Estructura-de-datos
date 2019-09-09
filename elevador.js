export default class Elevador {
    constructor(pisosTotales) {
        this._pisos = pisosTotales;

        this._pisoActual = 1;

        this._puerta = false;

    }
    get pisoActual() {
        return this._pisoActual;
    }
    
     
    movimientoPiso() {
        
        let movimiento = prompt("Ingrese al que quiere ir:");
        
        if(movimiento < 1 || movimiento > this._pisos) {
            alert("No se encuentra el piso");
        }
        else if(movimiento == this._pisoActual) {
            alert("Usted se encuentra en este piso");
        }
        else if(movimiento <= this._pisos && movimiento >= 1) {
            
            this._pisoActual = movimiento;
        }
        return "Usted se encuentra en el piso " + this._pisoActual; 
    }



    abrirPuerta() {
        if(this._puerta == true) {

            console.log("La puerta ya está abierta");
        }
        else {

            console.log("Puerta abierta ");

            this._puerta = true;

        }
        return "";
    }
    
    cerrarPuerta() {
        if(this._puerta == false) {
            console.log("La puerta ya está cerrada");
        }
        else {
            console.log("Puerta cerrada");
            this._puerta = false;
        }
        return "";
    }
}