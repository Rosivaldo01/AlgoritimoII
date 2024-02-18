const listaLivros = require ("./array");
const trocaLugar = require ("./encontraMenores");


function quickSort (array, esquerda, direita) {
    if(array.length > 1) {
        let indiceAtual = particiona (array, esquerda, direita)

        if (esquerda < indiceAtual -1){
            quickSort (array, esquerda, indiceAtual -1);
        }
        if (indiceAtual < direita) {
            quickSort (array, indiceAtual ,direita)
        }
    }
    return array;
}

function particiona (array, esquerda, direita) {
    console.log('array',array);
    console.log('esquerda, direita', esquerda, direita);

    let pivo = array [Math.floor( (esquerda + direita) / 2)]

    let atualEsquerda = esquerda //0
    let atualDiretia = direita // 10

    while (atualEsquerda <= atualDiretia){
        while (array [atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }

        while (array [atualDiretia].preco > pivo.preco){
            atualDiretia--
        }
        
        if (atualEsquerda <= atualDiretia) {
            trocaLugar (array, atualEsquerda, atualDiretia);
            atualEsquerda++;
            atualDiretia--;
        }
    }
    return atualEsquerda
}

console.log(quickSort(listaLivros, 0, listaLivros.length -1));