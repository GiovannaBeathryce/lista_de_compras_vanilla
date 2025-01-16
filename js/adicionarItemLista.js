import { criarItemLista } from "./criarItemLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

export function addItem(event){
    event.preventDefault();

    const novoItem = criarItemLista(item.value, listaDeCompras, listaComprados);
    listaDeCompras.appendChild(novoItem)
    item.value = ""
    verificarListaVazia(listaDeCompras)
}