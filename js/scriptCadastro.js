const buttonCadastrar = document.getElementById("cadastrar")
const buttonLista = document.getElementById("verLista")

buttonLista.addEventListener("click", () => {
    window.location.replace("../html/listaCadastro.html")
})
class Funcionario {
    constructor (id,nome, cargo, contato){
        this.id = id
        this.nome = nome
        this.cargo = cargo
        this.contato = contato
    }
}

let lista = []

let id = 0

function cadastrar (){
    let nome = document.getElementById("name").value;
    let cargo = document.getElementById("occupation").value;
    let email = document.getElementById("contact").value;
    
    lista.push(new Funcionario(id,nome,cargo,email))

    id++

    localStorage.setItem("listaFuncionario", lista)
    
}

buttonCadastrar.addEventListener("click", () => {
    cadastrar()
})