/**
 * Cálculo de passos em KM
 * @author Enzo Marcolino Lula de Oliveira
 */

let passosparakm = 0.00076;

function calcular() {
    const passos = Number(document.getElementById("passos").value);
    const km = passos * passosparakm;
    document.getElementById("resultado").innerText = `Você caminhou ${km.toFixed(2)} Quilômetros`;
}