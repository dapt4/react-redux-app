const START_GET_POKEMON = "START_GET_POKEMON"
const SUCCESS_GET_POKEMONS = "SUCCESS_GET_POKEMONS"

const startGetPokemons = (payload) => ({
  type: START_GET_POKEMON,
  ...payload
})

const successGetPokemons = payload => ({
  type: SUCCESS_GET_POKEMONS,
  ...payload
})

export const fetchPokemons = payload => {
  return dispatch => {
    dispatch(startGetPokemons())
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(results => dispatch(successGetPokemons(results)))
  }
}

