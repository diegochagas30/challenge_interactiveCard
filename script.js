const card_name= document.querySelector('input#cardHolder')
const num_card= document.querySelector('input#cardNumber')
const month= document.querySelector('input#expMonth')
const year= document.querySelector('input#expYear')
const cvc= document.querySelector('input#cvc')
const erro_cardNumber=document.querySelector('div#erro_cardNumber')
const erro_cardHolder=document.querySelector('div#erro_cardHolder')
const erro_expMonth=document.querySelector('div#erro_expMonth')
const erro_expYear=document.querySelector('div#erro_expYear')
const erro_cvc=document.querySelector('div#erro_cvc')

const nameFormat= /^[a-zA-Z]{3,}[a-zA-Z ]*$/  /* nome deve ter no mínimo 3 letras*/ 
const numCardFormat= /^\d{4}\s{1}\d{4}\s{1}\d{4}\s{1}\d{4}$/  /*nao pode ter espaços no começo/fim*/
const monthFormat= /^\d{2}$/
const yearFormat= /^\d{2}$/
const cvcFormat= /^\d{3}$/

const botao= document.getElementById('confirmButton')
botao.addEventListener('click', Confirm)

//tratamento de campos vazios
function blankInput(input_variable, erro_variable){
    if(input_variable.value.length==0){
        input_variable.style.borderColor="hsl(0, 100%, 66%)"
        erro_variable.innerHTML="Can't be blank"
        erro_variable.style.paddingTop="5px"   
    }
}

//tratamento de formatos digitados incorretamente
function incorrectFormat(input_variable, erro_variable){
    input_variable.style.borderColor= "hsl(0, 100%, 66%)"
    erro_variable.innerHTML="Wrong format!"
    erro_variable.style.paddingTop="5px"
}


function Confirm(){
    if(card_name.value.length==0){
        blankInput(card_name, erro_cardHolder)
    }else if(!nameFormat.test(card_name.value)) {
        incorrectFormat(card_name, erro_cardHolder)
    }else{
        card_name.style.borderColor="hsl(278, 68%, 11%)" 
        erro_cardHolder.innerHTML=""
        erro_cardHolder.style.paddingTop="0px"
    }

    if(num_card.value.length==0){
        blankInput(num_card, erro_cardNumber)
    }else if(!numCardFormat.test(num_card.value)){
        incorrectFormat(num_card, erro_cardNumber)
    }else{
        num_card.style.borderColor="hsl(278, 68%, 11%)"
        erro_cardNumber.innerHTML=""
        erro_cardNumber.style.paddingTop="0px"
    }

    if(month.value.length==0){
        blankInput(month, erro_expMonth)
    }else if(!monthFormat.test(month.value)){
        incorrectFormat(month, erro_expMonth)
    }else{
        month.style.borderColor="hsl(278, 68%, 11%)"
        erro_expMonth.innerHTML=""
        erro_expMonth.style.paddingTop="0px"
    }

    if(year.value.length==0){
        blankInput(year, erro_expYear)
    }else if(!yearFormat.test(year.value)){
        incorrectFormat(year, erro_expYear)
    }else{
        year.style.borderColor="hsl(278, 68%, 11%)"
        erro_expYear.innerHTML=""
        erro_expYear.style.paddingTop="0px"
    }

    if(cvc.value.length==0){
        blankInput(cvc, erro_cvc)
    }else if(!cvcFormat.test(cvc.value)){
        incorrectFormat(cvc, erro_cvc)
    }else{
        cvc.style.borderColor="hsl(278, 68%, 11%)"
        erro_cvc.innerHTML=""
        erro_cvc.style.paddingTop="0px"
    }

    if (!erro_cardNumber.innerHTML && !erro_cardHolder.innerHTML &&
        !erro_expMonth.innerHTML && !erro_expYear.innerHTML && !erro_cvc.innerHTML) {
        // Todas as validações passaram, redirecionar para complete-page.html
        window.location.href = "complete-page.html";
    }

    if (!erro_cardNumber.innerHTML && !erro_cardHolder.innerHTML &&
        !erro_expMonth.innerHTML && !erro_expYear.innerHTML && !erro_cvc.innerHTML) {
        // Preenche os elementos <p> com as informações inseridas pelo usuário
        document.getElementById("card-name").innerText = card_name.value || "0";
        document.getElementById("card-number").innerText = num_card.value.replace(/ /g, '').padEnd(16, "0");
        document.getElementById("card-date").innerText = `${month.value || "00"}/${year.value || "00"}`;
        document.getElementById("card-code").innerText = cvc.value || "000";
        }

    // Preenche os elementos <p> com as informações inseridas pelo usuário
    document.getElementById("card-name").innerText = card_name.value;
    document.getElementById("card-number").innerText = num_card.value;
    document.getElementById("card-date").innerText = `${month.value}/${year.value}`;
    document.getElementById("card-code").innerText = cvc.value;

    if (!erro_cardNumber.innerHTML && !erro_cardHolder.innerHTML &&
        !erro_expMonth.innerHTML && !erro_expYear.innerHTML && !erro_cvc.innerHTML) {

        const urlParams = new URLSearchParams(); 
        urlParams.set('cardName', card_name.value);
        urlParams.set('cardNumber', num_card.value);
        urlParams.set('cardDate', `${month.value}/${year.value}`);
        urlParams.set('cardCode', cvc.value);

        window.location.href = `complete-page.html?${urlParams.toString()}`; 
        
        }
    

}