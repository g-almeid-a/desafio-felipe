let nomeHeroi = "Silvius";
let xp = 5500;
let rank = "";

if (xp < 1000){
    rank = "Ferro";
}else if (xp >= 1000 && xp < 1999){
    rank = "Bronze";
}else if (xp >= 2000 && xp < 3999){
    rank = "Prata";
}else if (xp >= 4000 && xp < 6999){
    rank = "Ouro";
}else if (xp >= 7000 && xp < 9999){
    rank = "Platina";
}else if (xp >= 10000 && xp < 13999){
    rank = "Acendente";
}else if (xp >= 14000 && xp < 19999){
    rank = "Imoratal";
}else{
    rank = "Radiante";
}

console.log("O herói " + nomeHeroi + " atualmente possui: " + xp + " em experiência e por isto está no rank: " + rank);