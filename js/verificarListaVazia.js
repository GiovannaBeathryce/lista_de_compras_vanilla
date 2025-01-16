const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia (lista){
    if(lista.querySelectorAll("li").length > 0){
        mensagemListaVazia.style.display = "none";
    }else{
        mensagemListaVazia.style.display = "block";
    }
}