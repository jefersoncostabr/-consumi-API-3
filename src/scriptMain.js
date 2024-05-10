// export const endpoint = "https://api-teste-3-cors-no-backend.onrender.com";
// export const endpoint2 = "https://api-teste-3-cors-no-backend.onrender.com/hello/you";
// export const endpoint3 = "https://api-teste-3-cors-no-backend.onrender.com/mensagens";
// export const endpoint4 = "https://api-teste-3-cors-no-backend.onrender.com/addmsg";

export const endpoint = "http://localhost:3000/";
export const endpoint2 = "http://localhost:3000/hello/you";
export const endpoint3 = "http://localhost:3000/mensagens";
export const endpoint4 = "http://localhost:3000/addmsg";

async function createListItems(data) {
    const painelDiv = document.getElementById("painel");
    const ul = document.createElement("ul");
  
    for (let i = 0; i < data.length; i++) {
      const item = data[i]; // Obtem o item atual da array
      const li = document.createElement("li");
      li.textContent = `${i + 1} - ${item.mensagem}`; // Exibe o índice, nome e mensagem
      
      li.addEventListener("click", function() {
        this.classList.toggle("riscado");
      });
      
      ul.appendChild(li);
    }
  
    painelDiv.appendChild(ul);
  }

export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        createListItems(data)
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Função para enviar dados (POST)
export async function fetchPostData(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const responseText = await response.text();
        console.log("Data sent:", responseText);
    } catch (error) {
        console.error("Error sending data:", error);
    }
}

export const novaMsg = {
    nome: "teste",
    mensagem: "mensagem teste",
};

export async function deleteMsg(msgId) {
    const response = await fetch(`https://api-teste-3-cors-no-backend.onrender.com/del/${msgId}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    console.log("Mensagem deletada.");
}

// Rota inicial
// fetchData(endpoint);

// comprimentos por parâmetro
// fetchData(endpoint2);

// exibir todas as mensagens
// fetchData(endpoint3);

// Cadastrar
// fetchPostData(endpoint4, novaMsg);

// Apagar
// deleteMsg(1)