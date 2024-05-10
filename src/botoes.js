import { endpoint3, endpoint4, fetchData, fetchPostData, deleteMsg } from "./scriptMain.js"

// Exibir totos
const btnExibir = document.getElementById("btnExibir"); 
btnExibir.addEventListener('click', () =>{
    fetchData(endpoint3)
});

// cadastrar
const btnExibirPID = document.getElementById("btnCadastrar"); 
btnExibirPID.addEventListener('click', () =>{
    // let varNome = prompt("Nome")
    let varMsg = prompt("Mensagem")

    let novaMsgComPrompt = {
        // nome: varNome,
        mensagem: varMsg
    }
    fetchPostData(endpoint4, novaMsgComPrompt);
});

// Excluir Específico
const btnExcluir = document.getElementById("btnExcluirPorId"); 
btnExcluir.addEventListener('click', () =>{
    let idEscolhido = prompt("Digite o numero do item a excluir")
    return deleteMsg(idEscolhido)
});
