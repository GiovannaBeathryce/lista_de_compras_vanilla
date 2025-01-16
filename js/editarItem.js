export function editarItem(elemento){
    let itemEditado = prompt("Digite o novo item!")

    if (itemEditado !== null && itemEditado.trim() !== ""){
        const itemAtualizado = elemento.querySelector("#item-titulo");
        itemAtualizado.textContent = itemEditado;
    }
}