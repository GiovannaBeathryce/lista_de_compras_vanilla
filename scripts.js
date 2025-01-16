import { addItem } from "./js/adicionarItemLista.js";
import { exibirListaComprados } from "./js/exibirListaComprados.js";

const btnAdicionaItem = document.getElementById("adicionar-item");
btnAdicionaItem.addEventListener("click", addItem);
exibirListaComprados()