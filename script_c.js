document.getElementById("continueButton").addEventListener("click", function() {
    window.location.href = "index.html";
});

// Obtenha os dados da página index.html a partir dos parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const cardName = urlParams.get('cardName');
const cardNumber = urlParams.get('cardNumber');
const cardDate = urlParams.get('cardDate');
const cardCode = urlParams.get('cardCode');

// Preencha os elementos <p> com os dados obtidos
document.getElementById("card-name").innerText = cardName || "Jane Appleseed";
document.getElementById("card-number").innerText = cardNumber || "0000 0000 0000 0000";
document.getElementById("card-date").innerText = cardDate || "00/00";
document.getElementById("card-code").innerText = cardCode || "000";