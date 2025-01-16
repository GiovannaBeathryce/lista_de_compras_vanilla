import { exibirListaComprados } from "./exibirListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");

export function excluirItem(elemento){
    let confirme = confirm("Tem certeza que deseja excluir esse item?");
    if(confirme){
        elemento.remove();
        verificarListaVazia(listaDeCompras);
        exibirListaComprados();
    }
}