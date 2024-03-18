
async function PokemonList() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=75');
      const data = await response.json();
      const pokemonList = data.results;
      return pokemonList;
    } catch (error) {
      console.error('Erro ao obter a lista de Pokémon:', error);
    }
  }
  
  async function PokemonSelect() {
    const pokemonList = await PokemonList();
    const select1 = document.getElementById("pokemon1");
    const select2 = document.getElementById("pokemon2");
  
    pokemonList.forEach(pokemon => {
      const option1 = document.createElement("option");
      option1.value = pokemon.name;
      option1.textContent = pokemon.name;
      select1.appendChild(option1);
  
      const option2 = document.createElement("option");
      option2.value = pokemon.name;
      option2.textContent = pokemon.name;
      select2.appendChild(option2);
    });
  }
  
  PokemonSelect();
  
  async function PokemonData(pokemonName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erro ao obter dados do Pokémon ${pokemonName}:`, error);
    }
  }
  
  async function comparar() { // aqui ele vai pegar o 1 pokemon e o 2 pokemon e vai fazer a comparacao de quem tem mais pontos de vd
    const pokemon1Name = document.getElementById("pokemon1").value;
    const pokemon2Name = document.getElementById("pokemon2").value;
  
    if (!pokemon1Name || !pokemon2Name) {
      alert("Por favor, selecione dois Pokémon para comparar."); // verifica se os pokemons foram chamados 
      return;
    }
  
    const pokemon1Data = await PokemonData(pokemon1Name); // chama a funcao com os dados
    const pokemon2Data = await PokemonData(pokemon2Name);
  
    const pokemon1HP = pokemon1Data.stats.find(stat => stat.stat.name === "hp").base_stat;
    const pokemon2HP = pokemon2Data.stats.find(stat => stat.stat.name === "hp").base_stat;
  
    let resultado;
    if (pokemon1HP > pokemon2HP) {
      resultado = `${pokemon1Name} tem mais Pontos de vida do que ${pokemon2Name}.`; 
    } else if (pokemon1HP < pokemon2HP) {
      resultado = `${pokemon2Name} tem mais Pontos de vida do que ${pokemon1Name}.`; // se o pokemon 1 tem mais pontos de vida vai aparecer na tela, se nao vai mostrar q o pokemon2 e mais forte
    } else {
      resultado = `${pokemon1Name} e ${pokemon2Name} têm a mesma quantidade de Pontos de vida.`;
    }
  
    document.getElementById("resultado").innerText = resultado;
  
    // Atualiza as imagens dos Pokémon
    document.getElementById("pokemon1I").src = pokemon1Data.sprites.front_default;
    document.getElementById("pokemon2I").src = pokemon2Data.sprites.front_default;
  }