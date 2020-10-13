/* Como chamar os comandos do html*/
var texto = document.querySelector("#gameText");
var botao1 = document.querySelector("#btn-1");
var botao2 = document.querySelector("#btn-2");


function iniciarJogo () {
    
    botao1.onclick = Start;
}

function Start() {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você está em casa dormindo e acorda de repente na madrugada. Se depara com uma sombra no seu corredor fora do quarto... O QUE VOCÊ IRÁ FAZER?    ";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "inline-block";

   
    /* O texto no corpo dos botões. */
    botao1.innerText = "Levanto";
    botao2.innerText = "Continuo deitado";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = levanto;
    botao2.onclick = deitado;
}
function levanto(){
    texto.textContent = "Vai pro corredor ou olhar pela janela?"
    botao1.innerText = "Corredor";
    botao2.innerText = "Janela";

    botao1.onclick  = corredor;
    botao2.onclick = janela;
}
function deitado(){
    texto.textContent = "Você vê a sombra ficando mais próxima do seu quarto. O que irá fazer?"
    botao1.innerText = "Levanto";    
    botao2.innerText = "Seguir deitado";
   
    botao1.onclick  = levanto;
    botao2.onclick = deitar;
}
function deitar(){
    texto.textContent = "O assasino invade seu quarto. VOCÊ JÁ ESTÁ MORTO!"
    botao1.innerText = "Reset";    
    botao2.style.display = "none";

    botao1.onclick = iniciarJogo;
}
function corredor(){
    texto.textContent = "Você vê uma pessoa alta de costas para você mais a frente no corredor. Você desce ou ataca?"
    botao1.innerText = "Ataca";    
    botao2.innerText = "Desço";

    botao1.onclick = Ataca;
    botao2.onclick = Desce;
}
function Ataca(){
    texto.textContent = "ELE É MAIS FORTE E POSSUI UMA FACA. ELE TE ESFAQUEIA E VOCÊ MORRE!"
    botao1.innerText = "Reset"; 
    botao2.innerText = "Desço";

    botao1.onclick = iniciarJogo;
    botao2.style.display = "none";
}
function Desce(){
    texto.textContent = "Você desce a escada e se depara com sua sala toda revirada. Irá correr ou procurar uma arma?"
    botao1.innerText = "Arma"; 
    botao2.innerText = "Correr";

    botao1.onclick = arma;
    botao2.onclick = correr;
}
function arma(){
    texto.textContent = "Vai até a cozinha para pegar a faca ou a pistola no escritório do 2° Andar?"
    botao1.innerText = "Cozinha pegar a faca"; 
    botao2.innerText = "Escritório no 2° andar pegar a pistola";

    botao1.onclick = Faca;
    botao2.onclick = Pistola;
}
function correr(){
    texto.textContent = "A porta da sala está fechada e ele te ouviu forçar. Ele está vindo... Se esconde ou ataca?"
    botao1.innerText = "Se esconde"; 
    botao2.innerText = "Ataca";

    botao1.onclick = Esconder;
    botao2.onclick = Ataca;
}
function Esconder(){
    texto.textContent = " Ele viu você se escondendo. Você já está morto!!"
    botao1.innerText = "Reset"

    botao1.onclick = iniciarJogo;
    botao2.style.display = "none";
}

function Pistola(){
    texto.textContent = "Subindo, você o vê na porta do seu quarto antes do escritório e ele te ataca. DESCER OU ATACAR?"
    botao1.innerText = "DESCER"; 
    botao2.innerText = "ATACAR";

    botao1.onclick = Fugir;
    botao2.onclick = Ataca;
}

function Fugir(){
    texto.textContent = " Descendo, ele te esfaqueia na nuca e você MORRE!!"
    botao1.innerText = "Reset"

    botao1.onclick = iniciarJogo;
    botao2.style.display = "none";
}
function Faca(){
    texto.textContent = "Na cozinha, você pega a faca. Você irá atrás dele ou comete suícidio por desespero?"
    botao1.innerText = "Ir atrás dele"; 
    botao2.innerText = "Cometer Suícidio";

    botao1.onclick = Rush;
    botao2.onclick = Suicidio;
}
function Suicidio(){
    texto.textContent = "VOCÊ DESISTIU DE FUGIR!! "
    botao1.innerText = "Reset"

    botao1.onclick = iniciarJogo;
    botao2.style.display = "none";
}
function Rush(){
    texto.textContent = "Você vai atrás dele e encontra-o na porta do seu quarto de costas pra ti. Esfaqueia-o no pescoço e ele MORRE!"
    botao1.innerText = "PARABÉNS! VOCÊ SOBREVIVEU!!"; 
    

    botao1.onclick = iniciarJogo;
    botao2.style.display = "none";
}



iniciarJogo();
