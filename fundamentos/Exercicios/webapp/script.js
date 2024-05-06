function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (isNaN(media)) {
        alert("coloque todos os numeros");
        return;
    }

    if (media < 4) {
        alert("REPROVADO");
    } else if (media >= 4 && media < 7) {
        alert("RECUPERAÇÃO");
    } else {
        alert("APROVADO");
    }
}
