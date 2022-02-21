const kmPrice= .21;
const youngDiscount= .2;
const oldDiscount= .4;
let discount;

let km = prompt(`quanti km devi percorrere?`);
let age = prompt(`quanti anni hai?`);

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