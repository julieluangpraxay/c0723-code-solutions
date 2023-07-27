/* exported pokedex */

const pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '004',
    name: 'Charmander',
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '007',
    name: 'Squirtle',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '002',
    name: 'Ivysaur',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png',
  },
  {
    number: '005',
    name: 'Charmeleon',
    description:
      'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png',
  },
  {
    number: '008',
    name: 'Wartortle',
    description:
      'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png',
  },
  {
    number: '003',
    name: 'Venusaur',
    description:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png',
  },
  {
    number: '006',
    name: 'Charizard',
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png',
  },
  {
    number: '009',
    name: 'Blastoise',
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png',
  },
];

// function renderPokemon(pokemon) {
//   const columnThirdDiv = document.createElement('div'); // create the outer most div with class "column-third"

//   columnThirdDiv.className = 'column-third';

//   const pokemonCardDiv = document.createElement('div');
//   pokemonCardDiv.className = 'pokemon-card';

//   const pikachuImg = document.createElement('img');
//   pikachuImg.src= 'images/pikachu.png';

//   const pokemonCardText = document.createElementNS('div');
//   pokemonCardText.className = ''

//   columnThirdDiv.appendChild(pokemonCardDiv);

// }

function renderPokemon(pokemon) {
  // Create the outer "column-third" div
  const columnThirdDiv = document.createElement('div');
  columnThirdDiv.className = 'column-third';

  // Create the inner "pokemon-card" div
  const pokemonCardDiv = document.createElement('div');
  pokemonCardDiv.className = 'pokemon-card';

  // Create the "img" element and set its "src" attribute
  const imgElement = document.createElement('img');
  imgElement.src = pokemon.imageUrl;

  // Append the "img" element to the "pokemon-card" div
  pokemonCardDiv.appendChild(imgElement);

  // Create the "pokemon-card-text" div
  const pokemonCardTextDiv = document.createElement('div');
  pokemonCardTextDiv.className = 'pokemon-card-text';

  // Create and set the "h2" element for the Pokemon name
  const h2Element = document.createElement('h2');
  h2Element.textContent = pokemon.name;

  // Create and set the "h3" element for the Pokemon number
  const h3Element = document.createElement('h3');
  h3Element.textContent = pokemon.number;

  // Create and set the "p" element for the Pokemon description
  const pElement = document.createElement('p');
  pElement.textContent = pokemon.description;

  // Append the "h2", "h3", and "p" elements to the "pokemon-card-text" div
  pokemonCardTextDiv.appendChild(h2Element);
  pokemonCardTextDiv.appendChild(h3Element);
  pokemonCardTextDiv.appendChild(pElement);

  // Append the "pokemon-card-text" div to the "pokemon-card" div
  pokemonCardDiv.appendChild(pokemonCardTextDiv);

  // Append the "pokemon-card" div to the "column-third" div
  columnThirdDiv.appendChild(pokemonCardDiv);

  // Return the outer div
  return columnThirdDiv;
}

// Function to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the container div and append the DOM tree for Pikachu
  const container = document.querySelector('#container');
  container.appendChild(renderPokemon(pokedex.pikachu));
});
console.log(pokedex);
