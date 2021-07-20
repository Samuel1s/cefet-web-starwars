// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from './music-sem-private.js'
import { transformToRoman } from './roman.js'
import { friendlyFetch } from './friendly-fetch.js'
import { restartAnimation } from './restart-animation.js'

const API_ENDPOINT = 'https://swapi.dev/api'

/* -- Exercício 0. -- */

let listFilms = []
listFilms = await friendlyFetch(`${API_ENDPOINT}/films`);

/* -- Exercício 1. -- */

play({
    audioUrl: 'audio/tema-sw.mp3',
    coverImageUrl: 'imgs/logo.svg',
    title: 'Intro',
    artist: 'John Williams'

}, document.body)


/* -- Exercício 2. -- */

const listFilmsEl = document.querySelector('#filmes')
listFilmsEl.innerHTML = ''

listFilms.results.sort((a, b) => (a.episode_id < b.episode_id ? -1 : 1)).forEach( film => {
    
    const newListItem = document.createRange().createContextualFragment(

        `<li>Episode ${transformToRoman(film.episode_id)} - ${film.title}</li>`
    )

    newListItem.querySelector('li').addEventListener('click', () => {  
        loadIntro(film)      
    })

    listFilmsEl.appendChild(newListItem)
})


/* -- Exercício 3. -- */

const loadIntro = film => {
    const introEl = document.querySelector('pre.introducao')

    introEl.innerHTML = `Episode ${transformToRoman(film.episode_id)}\n${film.title}\n\n${film.opening_crawl}`
    restartAnimation(introEl)     
}
