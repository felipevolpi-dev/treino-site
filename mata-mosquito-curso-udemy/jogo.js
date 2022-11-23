var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo() // Acionar quando inicializado, colocado no body para quando modiicado o tamanho da janela onresize





function posicaoRandomica(){
    

    if(document.querySelector('#imosca')){
        document.querySelector('#imosca').remove()
        
           
        if(vidas > 3){
            window.location.href = 'fim-de-jogo.html'
            
        }else {
            document.querySelector(`#v${vidas}`).src="imagens/coracao_vazio.png"
            vidas++
        }
            
            
            
        
        

    }// para nao quebrar teve testar se tem o elemento antes de remove-lo, obs. ele é removido no mesmo comando que ordena que outro apareça. 

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90 //desconto do tamanho da imagem para não criar barras

    // se o eixo x ou y dor zero a imagem sairá por causa do menos 90, solução com operador ternário.

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    
    console.log(posicaoX, posicaoY)
    
    
    //criação do elemeno html - mosca
    
    var mosca = document.createElement('img') // criou elemento img dentro da variavel
    mosca.src = 'imagens/mosca.png' // acessou atriburo src e inseriu imagem
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'imosca'
    mosca.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosca)

    tamanhoAleatorio()
}


function tamanhoAleatorio(){ // classe da imagem randômica
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio(){ // classe da imagem lado randômico
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'       
    }
}