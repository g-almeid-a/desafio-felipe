let nomeHeroi = "Silvius";
let rank = "";
let vitoria = 500;
let derrota =380;

function calcula() {
    let soma = vitoria - derrota;  

    if (soma <= 10){
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
    }else if (soma >=101){
        rank = "Imoratal";
    }

    return soma;
}

let saldo = calcula();

console.log("O herói " + nomeHeroi + " tem um saldo de: " + saldo + " e está no rank: " + rank);