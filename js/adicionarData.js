export function novaData (){
    let dia = new Date().toLocaleDateString("pt-BR", {weekday:"long"})
    let data = new Date().toLocaleDateString();
    let hora = new Date().toLocaleTimeString("pr-BR", {hour:"numeric", minute:"numeric"});

    const dataCompleta = `${dia} ${data} às ${hora}`

    return dataCompleta
}