import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { exibirListaComprados } from "./exibirListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

let contador = 0;

export function criarItemLista (item, listaCompras, listaComprados){
    if(item === null || item.trim() === ""){
        alert("Por favor, insira um item!")
        return;
    }

    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("container-item");

    const containerNome = document.createElement("div")
    containerNome.classList.add("lista-item-container");

    
    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container");
    
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.id = "checkbox-" + contador++;
    checkboxInput.classList.add("checkbox-input");

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id)

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")

        if(checkboxInput.checked){

            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through"
            listaComprados.appendChild(itemLista);
            verificarListaVazia(listaCompras)
            exibirListaComprados()
            
        }else{
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none"
            listaCompras.appendChild(itemLista);
            verificarListaVazia(listaCompras)
            exibirListaComprados()
        }
    })
    
    const checkboxCustom = document.createElement("div");
    checkboxCustom.classList.add("checkbox-customizado");
    
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustom);

    checkboxContainer.appendChild(checkboxLabel);
    containerNome.appendChild(checkboxContainer);


    const nomeItemLista = document.createElement("p");
    nomeItemLista.id = "item-titulo"
    nomeItemLista.innerText = item;
    containerNome.appendChild(nomeItemLista);
    containerItemLista.appendChild(containerNome);


    const containerBotoesItem = document.createElement("div");
    containerBotoesItem.classList.add("lista-item-botoes-container");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("item-lista-button");

    const imgDeleteBtn = document.createElement("img")
    imgDeleteBtn.src = "img/delete.svg"
    imgDeleteBtn.alt = "Deletar item";
    deleteBtn.appendChild(imgDeleteBtn);
    containerBotoesItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => { excluirItem(itemLista); })

    const editBtn = document.createElement("button");
    editBtn.classList.add("item-lista-button");

    const imgEditBtn = document.createElement("img")
    imgEditBtn.src = "img/edit.svg";
    imgEditBtn.alt = "Editar item";
    editBtn.appendChild(imgEditBtn);
    containerBotoesItem.appendChild(editBtn);

    editBtn.addEventListener("click", () => { editarItem(itemLista); })

    containerItemLista.appendChild(containerBotoesItem);

    const itemData = document.createElement("p");
    itemData.classList.add("texto-data")
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday:"long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pr-BR", {hour:"numeric", minute:"numeric"})}`;

    itemLista.appendChild(containerItemLista);
    itemLista.appendChild(itemData);

    return itemLista;
}