function setup() {
  createCanvas(800, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCar();
  movimentaCar();
  movimentaAtor();
  voltaPosicaoInicial();
  verificaColisao();
  marcaPontos();
  marcadorDePontos();
  
}


    


