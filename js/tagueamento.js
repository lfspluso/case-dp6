// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

function callback(mutationsList) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            alert('Ch-ch-ch-changes!')
        }
    })
}


function callback(mutationsList) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
			mutationObserver.observe(mainNode, { attributes: true })
            ga('send', 'event', 'contato', 'enviado', 'enviado');
			observer.disconnect();
        }
    })
}


<script>
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
	  observer.disconnect();
	}
  })
};

var observer = new MutationObserver(callback);

observer.observe(document.body, config);