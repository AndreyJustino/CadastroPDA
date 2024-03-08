const buttonCadastrar = document.getElementById("cadastrar")

let tabela = document.getElementById("tabela-funcionario")
let corpoTabela = document.getElementById("corpoTabela")

buttonCadastrar.addEventListener("click", () => {
    window.location.replace("../index.html")
})

function main(){
    let lista = JSON.parse(localStorage.getItem("listaFuncionario"))
    
    exibirTabela(lista)

}

function exibirTabela(lista){
    
    lista.forEach((element, index) => {

        const tr = `
        <tr id="element_${index}">
            <td class="id">${element.id}</td>
            <td class="nome">${element.nome}</td>
            <td class="cargo">${element.cargo}</td>
            <td class="contato">${element.contato}</td>
            <td class="update"><button class="editar" id="editar" onclick="editar(${index})">Editar</button></td>
            <td class="delete"><button class="excluir" id="excluir" onclick="excluir(${index})">Excluir</button></td>
        </tr>
        `
        corpoTabela.innerHTML += tr
    });
}

function excluir(index){
    let lista = JSON.parse(localStorage.getItem("listaFuncionario"))

    lista.splice(index,1)

    localStorage.setItem("listaFuncionario", JSON.stringify(lista))

    location.reload()
}

function editar(index){

    localStorage.setItem("editFuncionario",index)
    
    location.replace("../html/edit.html")

    

}
