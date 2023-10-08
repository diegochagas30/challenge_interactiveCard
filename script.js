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

const botao= document.getElementById('confirmButton')
botao.addEventListener('click', Confirm)


function Confirm(){
    if(card_name.value.length==0){
        card_name.style.borderColor= "hsl(0, 100%, 66%)"
        erro_cardHolder.innerHTML="Can't be blank"
        erro_cardHolder.style.paddingTop="5px"
    }else{
        card_name.style.borderColor="hsl(278, 68%, 11%)" 
        erro_cardHolder.innerHTML=""
        erro_cardHolder.style.paddingTop="0px"
    }

    if(num_card.value.length==0){
        num_card.style.borderColor="hsl(0, 100%, 66%)"
        erro_cardNumber.innerHTML="Can't be blank"
        erro_cardNumber.style.paddingTop="5px"
    }else{
        num_card.style.borderColor="hsl(278, 68%, 11%)"
        erro_cardNumber.innerHTML=""
        erro_cardNumber.style.paddingTop="0px"
    }

    if(month.value.length==0){
        month.style.borderColor="hsl(0, 100%, 66%)"
        erro_expMonth.innerHTML="Can't be blank"
        erro_expMonth.style.paddingTop="5px"
    }else{
        month.style.borderColor="hsl(278, 68%, 11%)"
        erro_expMonth.innerHTML=""
        erro_expMonth.style.paddingTop="0px"
    }

    if(year.value.length==0){
        year.style.borderColor="hsl(0, 100%, 66%)"
        erro_expYear.innerHTML="Can't be blank"
        erro_expYear.style.paddingTop="5px"
    }else{
        year.style.borderColor="hsl(278, 68%, 11%)"
        erro_expYear.innerHTML=""
        erro_expYear.style.paddingTop="0px"
    }

    if(cvc.value.length==0){
        cvc.style.border="1px solid hsl(0, 100%, 66%)"
        erro_cvc.innerHTML="Can't be blank"
        erro_cvc.style.paddingTop="5px"
    }else{
        cvc.style.borderColor="hsl(278, 68%, 11%)"
        erro_cvc.innerHTML=""
        erro_cvc.style.paddingTop="0px"
    }
}