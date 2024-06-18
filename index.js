let heroi = "Hamash"
let xp = "11.000"

if(xp > 0 && xp <= 1.000){
    console.log("O Herói " + heroi + " está no nivel Ferro")
} 
else if (xp > 1.001 && xp <= 2.000 ){
    console.log("O Herói " + heroi + " está no nivel Bronze" )
}
else if (xp > 2.001 && xp <= 5.000){
    console.log("O Herói " + heroi + " está no nivel Prata")
}
else if(xp > 6.001 && xp <= 7.000){
    console.log("O Herói " + heroi + " está no nivel Ouro")
}
else if(xp > 7.001 && xp <= 8.000){
    console.log("O Herói " + heroi + " está no nivel Platina")
}
else if(xp > 8.001 && xp <= 9.000){
    console.log("O Herói " + heroi + " está no nivel Ascendente")
}
else if(xp > 9.001 && xp <= 10.000){
    console.log("O Herói " + heroi + " está no nivel Imortal")
}
else if(xp >= 10.001){
    console.log("O Herói " + heroi + " está no nivel Radiante")
}
else{
    console.log("O Herói " + heroi + " Precisa jogar uma partida")
}
