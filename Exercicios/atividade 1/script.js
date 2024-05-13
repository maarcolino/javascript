/**
 * Cálculo da média de 4 notas
 * @author Enzo Marcolino Lula de Oliveira
 */
let nota1, nota2, nota3, nota4, media

function calcular() {
    //entrada de dados
    nota1 = Number(frmMedia.txtNota1.value)
    nota1 = Number(frmMedia.txtNota2.value)
    nota1 = Number(frmMedia.txtNota3.value)
    nota1 = Number(frmMedia.txtNota4.value)
    //processamento
    media = (nota1 + nota2 + nota3 + nota4) / 4
    //saida
    frmMedia.txtMedia.value = media.toFixed(1)
    if {media < 4} {
        frmMedia.txtStatus.value = "Reprovado"
    } else if (media >= 7) {
        frmMedia.txtStatus.value = "Aprovado"
    } else {
        frmMedia.txtStatus.value = "Recuperação"
    }
}