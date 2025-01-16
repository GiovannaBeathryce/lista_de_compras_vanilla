import { exibirListaComprados } from "./exibirListaComprados.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");

let contador = 0;

export function criarItemLista (item){

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
            exibirListaComprados()
            
        }else{
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none"
            listaDeCompras.appendChild(itemLista);
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

    const editBtn = document.createElement("button");
    editBtn.classList.add("item-lista-button");

    const imgEditBtn = document.createElement("img")
    imgEditBtn.src = "img/edit.svg";
    imgEditBtn.alt = "Editar item";
    editBtn.appendChild(imgEditBtn);
    containerBotoesItem.appendChild(editBtn);


    containerItemLista.appendChild(containerBotoesItem);

    const itemData = document.createElement("p");
    itemData.classList.add("texto-data")
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday:"long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pr-BR", {hour:"numeric", minute:"numeric"})}`;

    itemLista.appendChild(containerItemLista);
    itemLista.appendChild(itemData);

    return itemLista;
}