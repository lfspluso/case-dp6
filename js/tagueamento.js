// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


	//MENU
	document.querySelector('.menu-lista-contato').addEventListener('click', ()=>{
		ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
	});
	document.querySelector('.menu-lista-download').addEventListener('click', ()=>{
		ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
	});
	
	// ANALISE: LOREM, IPSUM, DOLOR
	
  	document.querySelector('.card-montadoras:nth-child(1)').addEventListener('click', ()=>{
		ga('send', 'event', 'analise', 'ver_mais', 'Lorem');
	});
  	document.querySelector('.card-montadoras:nth-child(2)').addEventListener('click', ()=>{
		ga('send', 'event', 'analise', 'ver_mais', 'Ipsum');
	});
  	document.querySelector('.card-montadoras:nth-child(3)').addEventListener('click', ()=>{
		ga('send', 'event', 'analise', 'ver_mais', 'Dolor');
	});
	document.querySelector('.menu-lista-contato').addEventListener('click', 
	
	//CAMPOS DO FORM PREENCHIDOS
	document.getElementById('nome').addEventListener('change', ()=>{
		ga('send', 'event', 'contato', 'nome', 'preencheu');
	});
	document.getElementById('email').addEventListener('change', ()=>{
		ga('send', 'event', 'contato', 'email', 'preencheu');
	});
	document.getElementById('telefone').addEventListener('change', ()=>{
		ga('send', 'event', 'contato', 'telefone', 'preencheu');
	});
	document.getElementById('aceito').addEventListener('change', ()=>{
		ga('send', 'event', 'contato', 'aceito', 'preencheu');
	});
	
	//LIGHTBOX MUTATION
	function isObs() {
		var btn = document.querySelector(".lightbox");
		if (document.querySelector(".lightbox-open")){
			return true;
		}
	};

	var config = { attributes: true, childList: false, subtree: false };

	var callback = function (mutationsList, observer) {
		setTimeout(function () {
			if (isObs()) {
				ga('send', 'event', 'contato', 'enviado', 'enviado');
				//observer.disconnect();
			}
		})
	};

	var observer = new MutationObserver(callback);

	observer.observe(document.body, config);