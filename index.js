/*
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */



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
