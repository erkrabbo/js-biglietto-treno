let myForm = document.forms.myForm;

myForm.addEventListener("submit", calcolaPrezzo);

function calcolaPrezzo(e){
    const kmPrice= .21;
    const youngDiscount= .2;
    const oldDiscount= .4;
    let discount;
    
    let km = document.myForm.km.value;
        console.log(km);
    let age = document.myForm.age.value;
        console.log(age);
    
    let ticketCost = km * kmPrice;
    let ticket = document.getElementById("ticket");
    
    
    if (age < 18){
        discount= youngDiscount;
        ticketCost = ticketCost - (ticketCost * discount);
    
        ticket.innerHTML=
            `Hai ${age} anni per cui è stato applicato uno sconto del ${discount * 100}%.
            Il prezzo finale del biglietto è €${ticketCost.toFixed(2)}.`;
    
    }else if (age > 65){
        discount= oldDiscount;
        ticketCost = ticketCost - (ticketCost * discount);
    
        ticket.innerHTML=
            `Hai ${age} anni per cui è stato applicato uno sconto del ${discount * 100}%.
            Il prezzo finale del biglietto è €${ticketCost.toFixed(2)}.`;
    }
    
    else{
        ticket.innerHTML=
            `Il prezzo finale del biglietto è €${ticketCost.toFixed(2)}.`;
    }
    
    console.log(ticketCost)
    e.preventDefault();
}