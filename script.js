const catImageElement = document.getElementById("cat-image");
document.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg,png")
    .then(response => response.json())
    .then(data => {
      catImageElement.src = data[0].url;
      catImageElement.style.display = "block";
    })
    .catch(error => console.error(error));
});

var agora = new Date();
var hora = agora.getHours();
var mensagem;

if (hora >= 6 && hora < 12) {
    mensagem = "Bom dia, meu bem!";
} else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde, amor!";
} else if (hora >= 18 || hora < 23) {
    mensagem = "Esses gatos filhotes te </br> desejam uma boa noite!";
} else {
    mensagem = "Não tá meio tarde para estar </br> vendo essas coisinhas feias?";
}

document.getElementById("mensagem").innerHTML = mensagem;

var balao = document.getElementById("balao");
balao.classList.remove("esconder");
setTimeout(function() {
  balao.classList.add("esconder");
  balao.addEventListener("animationend", function() {
    balao.remove();
  });
}, 6000); // altere o valor (em milissegundos) para mudar o tempo de exibição do balão
