//Imagens e Sons do Jogo

//Imagem do Jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCar;
let imagemCar2;
let ImagemCar3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCar = loadImage("imagens/carro-1.png");
  imagemCar2 = loadImage("imagens/carro-2.png");
  imagemCar3 = loadImage("imagens/carro-3.png");
  imagemCars = [imagemCar,imagemCar2,imagemCar3,
                imagemCar,imagemCar2,imagemCar3]
  
  somDaTrilha = loadSound("sons/8bit.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/sound1.wav");

}


