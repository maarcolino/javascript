/**
 * JS - Simulador de operadores lógicos
 * @author Enzo Marcolino
 */

// valor recebido
// 1 acender lâmpada
// 2 apagar lâmpada
// 3 quebrar lâmpada

let valor
let quebrada = false

function simular(valor) {

    //quebrar a lâmpada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "./img/broken.jpg"
    }
}

