const listaComprados = document.getElementById("lista-comprados")
const tituloComprados = document.querySelector(".titulo-lista-comprados")
const divComprados = document.querySelector(".divisor-lista-comprados")

export function exibirListaComprados (){
    if(listaComprados.childElementCount === 0){
        tituloComprados.style.display = "none";
        divComprados.style.display = "none";
    }else{
        tituloComprados.style.display = "block";
        divComprados.style.display = "block";
    }
}