import { conectaApi } from "./conectaApi.js";
import constroiCard  from "./mostraVideos.js"


async function pesquisarVideo(evento){

    evento.preventDefault();
    console.log("teste")
    const dadosPesquisa = document.querySelector("[data-pesquisar]");
    const busca = await conectaApi.pesquisaVideo(dadosPesquisa.value);

    
    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo,elemento.descricao, elemento.url, elemento.imagem)));
}


const botaoPesquisa = document.querySelector("[data-button-pesquisar]");

botaoPesquisa.addEventListener("click", evento => pesquisarVideo(evento));