let nomeHeroi = "Silvius";
let vitoria = 50;
let derrota = 40;
let rank = "";

function calculadora() {
    let soma = vitoria - derrota;
}

if (soma < 10){
    rank = "Ferro";
}else if (soma >= 11 && soma < 20){
    rank = "Bronze";
}else if (soma >= 21 && soma < 50){
    rank = "Prata";
}else if (soma >= 51 && soma < 80){
    rank = "Ouro";
}else if (soma >= 81 && soma < 90){
    rank = "Platina";
}else if (soma >= 91 && soma < 100){
    rank = "Acendente";
}else{
    rank = "Imoratal";
}

console.log("O herói " + nomeHeroi + " tem de saldo: " + calculadora + " em experiência e por isto está no rank: " + rank);