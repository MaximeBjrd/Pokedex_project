import { CONSTANTS } from "../../../constants/app-constants";

/*
    Displays the card of each pokemon.
*/
export function PokemonListItem({pokemon}) {
    return <>
        <img src={`${CONSTANTS.POKEMON_IMAGE_BASE_URL}/${pokemon.id}.svg`} alt={pokemon.name} />
        <h2>#{pokemon.id} {pokemon.name}</h2>
        <p>{pokemon.types.join(", ")}</p>
    </>
}