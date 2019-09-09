import Elevador from "./elevador.js";

class Main {
    constructor() {
        let elevador = new Elevador(10); 
        let btnElevador = document.querySelector("#btnElevador");
        btnElevador.addEventListener('click', () => {
            
            console.log("Este contiene " + elevador._pisos + " pisos");
            console.log(elevador.movimientoPiso());
           
        });


        let btnAbrirPuerta = document.querySelector("#btnAbrirPuerta");

        btnAbrirPuerta.addEventListener('click', () => {

            console.log(elevador.abrirPuerta());
        });



        let btnCerrarPuerta = document.querySelector("#btnCerrarPuerta");

        btnCerrarPuerta.addEventListener('click', () => {

            console.log(elevador.cerrarPuerta());

        });
    }
}

let m = new Main();