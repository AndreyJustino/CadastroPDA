const buttonCadastrar = document.getElementById("cadastrar")
const buttonLista = document.getElementById("verLista")

if(!localStorage.getItem("listaFuncionario")){
    localStorage.setItem("listaFuncionario", JSON.stringify([]) )
}

class Funcionario {
    constructor (nome, cargo, contato){
        this.id = JSON.parse(localStorage.getItem("listaFuncionario")).length
        this.nome = nome
        this.cargo = cargo
        this.contato = contato
    }
}

function cadastrar (){
    
    let nome = document.getElementById("name").value;
    let cargo = document.getElementById("occupation").value;
    let email = document.getElementById("contact").value;
    
    const novoFuncionario = new Funcionario(nome,cargo,email) 
    
    const listaFuncionario = JSON.parse(localStorage.getItem("listaFuncionario"))
    listaFuncionario.push(novoFuncionario)

    localStorage.setItem("listaFuncionario", JSON.stringify(listaFuncionario))
}

buttonLista.addEventListener("click", () => {
    window.location.replace("../html/listaCadastro.html")
})

buttonCadastrar.addEventListener("click", () => {
    cadastrar()
})