var timeId = null; //que sera a variavel que vai armazenar o valor de saida do cronometro

function iniciarjogo() {

	var url = window.location.search;
	var nivel_jogo = url.replace('?', '');
	var tempo_segundos = 0;

	if (nivel_jogo == 1) {

		// Nivel facil
		tempo_segundos = 120;

	}if (nivel_jogo == 2) {

		// Nivel Medio
		tempo_segundos = 60;

	}if (nivel_jogo == 3) {

		// Nivel Dificil
		tempo_segundos = 30
	}

	// tempo segundos do cronometro

	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quantidades dos baloes 

	var qtde_baloes = 80;
	// imprimir qrde de baloes inteiros

	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	document.getElementById('baloes_estourados').innerHTML = 0;

	criar_baloes(qtde_baloes);

	contagem_tempo(tempo_segundos + 1);
}

function contagem_tempo(segundos) {

	segundos = segundos -1;

	if (segundos == -1 ) {
		clearTimeout(timeId); // ele para a funcao do setTimeout 
		game_over();
		return false;
	}

	document.getElementById('cronometro').innerHTML = segundos;

	var timeId = setTimeout("contagem_tempo("+segundos+")", 1000);
}

function game_over() {
	alert('Fim de jogo voce nao consegui estourar todos baloes a tempo');
}

function criar_baloes(qtde_baloes) {

	for (var i = 1; i <= qtde_baloes; i++) {
		var balao = document.createElement('img');
		balao.src = 'imagens/angry-bird.ico';
		balao.style.width = '40px';
		balao.style.margin = '10px';
		balao.id = 'b'+i;
		balao.onclick = function () {
			estourar(this);
		}

		var cenario = document.getElementById('cenario').appendChild(balao);
	}
}

function estourar(e) {

	balao_id = e.id;

	document.getElementById(balao_id).setAttribute("onclick","")
	document.getElementById(balao_id).src = 'imagens/angry-bird1.ico';

	pontuacao(-1);
}

function pontuacao(acao) {

	var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
	var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);

	baloes_inteiros = baloes_inteiros + acao;
	baloes_estourados = baloes_estourados - acao;

	document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
	document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

	fimdejogo(baloes_inteiros);
}

	function fimdejogo(baloes_inteiros) {
		if (baloes_inteiros == 0) {
			alert('Parabens voce estourou todos os baloes do jogo yeeeeeeeeeee!!!!!!');
			parar_jogo();
		}

	}

function parar_jogo(){
	clearTimeout(timeId); // ele para a funcao do setTimeout 
}