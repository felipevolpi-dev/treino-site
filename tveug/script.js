function verificar(){
    var pes = document.querySelector('#ipes').value    
    var img = document.querySelector('#imagem')
    var img1 = document.querySelector('#imagem1')
    var img2 = document.querySelector('#imagem2')
    var texto = document.querySelector ('#texto')    
    switch (pes){
        case 'ton':
            document.body.style.background = `black`
            img.src = `imagens/ton.png`
            img1.src = `imagens/galinha.png`            
            img2.src = `imagens/galinha.png`
            texto.innerHTML = 'Tom, você é uma GALINHA!!!'            
            break
         case 'nat':
            document.body.style.background = `black`
            img.src = `imagens/nat.png`
            img1.src = `imagens/ton.png`            
            img2.src = `imagens/galinha.png`
            texto.innerHTML = 'Nat, seu marido é uma GALINHA!!!'            
            break
         case 'oct':
            document.body.style.background = `black`
            img.src = `imagens/otavio.png`
            img1.src = `imagens/ton.png`            
            img2.src = `imagens/galinha.png`
            texto.innerHTML = 'Octavio, seu pai é uma GALINHA!!!'            
            break
         case 'pal':
            document.body.style.background = `black`
            img.src = `imagens/paula.png`
            img1.src = `imagens/ton.png`            
            img2.src = `imagens/galinha.png`
            texto.innerHTML = 'Paula, seu amigo é uma GALINHA!!!'            
            break
         case 'ric':
            document.body.style.background = `black`
            img.src = `imagens/rick.png`
            img1.src = `imagens/ton.png`            
            img2.src = `imagens/galinha.png`
            texto.innerHTML = 'Rick, seu irmão é uma GALINHA!!!'            
            break
         case 'shi':
            document.body.style.background = `black`
            img.src = `imagens/shinoda.png`
            img1.src = `imagens/ton.png`            
            img2.src = `imagens/galinha.png`
            texto.innerHTML = 'Shinoda, seu amigo é uma GALINHA!!!'            
            break
         case 'vol':
            document.body.style.background = `black`
            img.src = `imagens/volpi.png`
            img1.src = `imagens/ton.png`            
            img2.src = `imagens/galinha.png`
            texto.innerHTML = 'Volpi, seu amigo é uma GALINHA!!!'            
            break
        
    }
    img.style.display = 'inline';
    img1.style.display = 'inline';
    img2.style.display = 'inline';
}
    