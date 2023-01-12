//Player
let xAtor = 85
let yAtor = 366
let colisao = false 
let meusPontos = 0

//Movimentos Player

function mostraAtor(){
  
    image(imagemDoAtor,xAtor,yAtor,30,30);
 
}



function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeMovimentar()){
      yAtor += 3
    }    
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeMovimentaDireita()){
      xAtor += 3
    }    
  }
  if (keyIsDown(LEFT_ARROW)){
     if(podeMovimentaEsquerda()){
       xAtor -= 3
     }
    }
  }

function verificaColisao(){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCars.length; i = i + 1){
    colisao = collideRectCircle(xCars[i], yCars[i], comprimentoCar, alturaCar,xAtor,yAtor,15)
    if(colisao){
     voltaPlayer();
      somDaColisao.play()
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
  
}


function voltaPlayer(){
  yAtor = 366;
}

function marcaPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color(255,20,147))
  text(meusPontos,width / 10, 27);
}

function marcadorDePontos(){
  if (yAtor < 6){
    meusPontos += 1;
    somDoPonto.play();
    voltaPlayer();
  }
  
}

function pontosMaiorQueZero(){
   return meusPontos > 0
}

function podeMovimentar(){
  return yAtor < 366;
}

function podeMovimentaEsquerda(){
  return xAtor > 0;
}

function podeMovimentaDireita(){
  return xAtor < 780;
}





