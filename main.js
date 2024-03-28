
const form = document.querySelector('form');


function recebeEventoForm (evento) {   
evento.preventDefault ();  //para prevenir a funcao padrao de recarregar a pag ao clicar no input 'submit'
}
form.addEventListener(`submit`, recebeEventoForm);



const tagAll = document.querySelector('.tagAll');
const tagHtmlCss = document.querySelector('.tagHtmlCss');
const tagJavaScript = document.querySelector('.tagJavaScript');
const tagBootstrap = document.querySelector('.tagBootstrap');

const itemHtmlCss = document.querySelector('.itemHtmlCss');
const itemJavaScript = document.querySelector('.itemJavaScript');
const itemBootstrap = document.querySelector('.itemBootstrap');


tagAll.addEventListener('click', () => {
    alert('oi')
    itemHtmlCss.classList.remove('desaparece');
    itemBootstrap.classList.remove('desaparece');
    itemJavaScript.classList.remove('desaparece');
});

tagHtmlCss.addEventListener('click', () => {
    itemHtmlCss.setAttribute('class', 'aparece');
    itemJavaScript.setAttribute('class', 'desaparece');
    itemBootstrap.setAttribute('class', 'desaparece');
});

tagJavaScript.addEventListener('click', () => {
    itemHtmlCss.setAttribute('class', 'desaparece');
    itemJavaScript.setAttribute('class', 'aparece');
    itemBootstrap.setAttribute('class', 'desaparece');
});

tagBootstrap.addEventListener('click', () => {
    itemHtmlCss.setAttribute('class', 'desaparece');
    itemJavaScript.setAttribute('class', 'desaparece');
    itemBootstrap.setAttribute('class', 'aparece');
});
