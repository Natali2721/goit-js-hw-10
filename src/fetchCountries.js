const URL = 'https://restcountries.com/v3.1/name/';
const filter = '?field=name,capital,population,flags,languages';

function fetchCountries(name) {
  return fetch(`${URL}${name}${filter}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default { fetchCountries };

const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
    response.json()
  );
}

//https://restcountries.com/v2/{service}?fields={field},{field},{field}
//https://restcountries.com/v2/all?fields=name,capital,currencies
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
