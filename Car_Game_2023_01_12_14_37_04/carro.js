//código dos Carros

//váriaves + listas dos Carros
let xCars = [800,800,800,800,800,800]
let yCars = [40,96,150,210,270,318];
let velocidadeCars = [5,3,6.5,2,7,8];
let comprimentoCar = 50;
let alturaCar = 40;


//Movimento do Carros

function mostraCar(){
    for(let i = 0; i < imagemCars.length; i++ ){
      image(imagemCars[i],xCars[i],yCars[i],comprimentoCar,alturaCar);
      
    }
}

function movimentaCar(){
  
  for(let i = 0; i < imagemCars.length; i++){
    xCars[i] -= velocidadeCars[i];
  }
}

function voltaPosicaoInicial(){
  for(let i = 0; i < imagemCars.length; i++){
    if(passouTodaTela(xCars[i])){
      xCars[i] = 800;
    }
  }
}

function passouTodaTela(xCars){
  
  return xCars < -50;
  
}
