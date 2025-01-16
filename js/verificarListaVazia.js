const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia (lista){
    if(lista.childElementCount > 0){
        mensagemListaVazia.style.display = "none";
    }else{
        mensagemListaVazia.style.display = "block";
    }
}