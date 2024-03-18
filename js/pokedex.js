const container = document.querySelector("#container"); // onder vai mostrar as informacoes
const pokemonQuantidade = 209 // quantidade de pokemon que vai aparacer no meu site



const fetchPokemons = async () => {             // vai buscar os dados, de 1 ate 209 pokemons
    for (let i = 1; i <= pokemonQuantidade; i++) {
        await getPokemons(i)
    }
}
const getPokemons = async (id) => {   //converte a mensagem recebida da api para json, e depois a funcao vai criar as cartas e receber os dados
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const mainType = data.types[0].type.name; // Determina o tipo principal
    createPokemonCarta(data, mainType);
}



const createPokemonCarta = (poke, mainType) => {  //aqui ele vai criar uma carta com as informacoes, recebidas da pokemon, como habilidade, forca
    const carta = document.createElement('div');
    carta.classList.add("pokemon");

    const name = poke.name[0].toUpperCase() + poke.name.slice(1);
    const id = poke.id.toString().padStart(3, '0');

    const pokemonInnerHTML = `
        <div class="imgcontainer">
            <img src="${poke.sprites.front_default}" alt="${name}"> 
        </div> 
        <div class="informacoes">
            <span class="numero">#${id}</span>
            <h3 class="nome">${name}</h3>
            <small class="type">Tipo: <span>${mainType}</span></small>
        </div>
    `;
    carta.innerHTML = pokemonInnerHTML;
    container.appendChild(carta);
}

fetchPokemons() // aqui vai chamar a funcao 