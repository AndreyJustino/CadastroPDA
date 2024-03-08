class Funcionario {
    constructor (nome, cargo, contato){
        this.id = Number(localStorage.getItem("editFuncionario"))
        this.nome = nome
        this.cargo = cargo
        this.contato = contato
    }
}

const index = Number(localStorage.getItem("editFuncionario"))

const lista = JSON.parse(localStorage.getItem("listaFuncionario"))

const voltaTabela = document.getElementById("verTabela")

document.getElementById("name").value = lista[index].nome;
document.getElementById("occupation").value = lista[index].cargo;
document.getElementById("contact").value = lista[index].contato;

function editar(){
    const nome = document.getElementById("name").value;
    const cargo = document.getElementById("occupation").value;
    const contato = document.getElementById("contact").value;

    const funcionario = new Funcionario(nome,cargo,contato)

    lista.splice(index,1,funcionario)

    localStorage.setItem("listaFuncionario", JSON.stringify(lista))  

    localStorage.removeItem("editFuncionario")
    window.location.replace("../html/listaCadastro.html")
}

voltaTabela.addEventListener("click",() => {
    window.location.replace("../html/listaCadastro.html")
})