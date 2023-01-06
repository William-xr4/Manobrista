var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");
var largura_carro =110;
var altura_carro =200;
var pos_x =0;
var pos_y =0;
var novo_plano_de_fundo;
var nova_imagem_carro;
var plano_de_fundo = "parkingLot.jpg";
var imagem_carro = "car2.png";

function add() {
    novo_plano_de_fundo = new Image();
    novo_plano_de_fundo.onload = atualiza_plano_de_fundo;
    novo_plano_de_fundo.src = plano_de_fundo;

	nova_imagem_carro = new Image();
    nova_imagem_carro.onload = atualiza_imagem_do_rover;
    nova_imagem_carro.src = imagem_carro;
}

function atualiza_plano_de_fundo() {
	contexto.drawImage(novo_plano_de_fundo, 0, 0, canvas.width, canvas.height);

}

function atualiza_imagem_do_rover() {
	contexto.drawImage(nova_imagem_carro, pos_x, pos_y, largura_carro, altura_carro);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(pos_y>=0){
		pos_y=pos_y-10;
		atualiza_plano_de_fundo();
		atualiza_imagem_do_rover();
		console.log("Quando a seta para cima é pressionada, x = "+pos_x+" / y = "+pos_y);
	}
}

function down()
{
	if(pos_y<=410){
		pos_y=pos_y+10;
		atualiza_plano_de_fundo();
		atualiza_imagem_do_rover();
		console.log("Quando a seta para baixo é pressionada, x = "+pos_x+" / y = "+pos_y);
	}
}

function left()
{
	if(pos_x>=0){
		pos_x=pos_x-10;
		atualiza_plano_de_fundo();
		atualiza_imagem_do_rover();
		console.log("Quando a seta para esquerda é pressionada, x = "+pos_x+" / y = "+pos_y);
	}
}

function right()
{
	if(pos_x<=890){
		pos_x=pos_x+10;
		atualiza_plano_de_fundo();
		atualiza_imagem_do_rover();
		console.log("Quando a seta para direita é pressionada, x = "+pos_x+" / y = "+pos_y);
	}
}
