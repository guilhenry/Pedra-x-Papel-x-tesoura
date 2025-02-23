const jogada1 = ["pedra", "tesoura","papel"];
const bot1 = document.querySelector("#bot1");
const bot2 = document.querySelector("#bot2");
const bot3 = document.querySelector("#bot3");
const resTel = document.querySelector("#resultado");
const xis = document.querySelector("#xis")


bot1.addEventListener("click",()=>{resultado("pedra")})
bot2.addEventListener("click",()=>{resultado("papel")})
bot3.addEventListener("click",()=>{resultado("tesoura")})

function pcPlayer(){
    return jogada1[Math.floor(Math.random()*3) ]
};
function imgPc(jogada){
    return '<img class="imagemplay" src="/imagem/'+ jogada + '.png">';
}

function imgplay(jogarei){
  
    return '<img class="imagemplay" src="/imagem/'+ jogarei + '.png">';
}

function resultado(elemento){
    const npc = pcPlayer();
    let result;

   
    if (npc == elemento){
        result = "Empate"
    } else if( elemento == "pedra" && npc == "tesoura" ||
               elemento == "papel" && npc == "pedra" ||
               elemento == "tesoura" && npc == "papel"){
        result = "Você Ganhou"

    }else{
        result = "Você Perdeu"
    }

    xis.style.display = "block";
    pcEscolha.innerHTML = imgPc(npc)
    Escolhaplay.innerHTML = imgplay(elemento)
    resulta.innerHTML = result
}
