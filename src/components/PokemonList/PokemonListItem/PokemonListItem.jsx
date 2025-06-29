import style from "./PokemonListItem.module.css";

import { CONSTANTS } from "../../../constants/app-constants";

import { getTypeColor } from "../../../api/pokedex-api";

/*
    Displays the card of each pokemon.
*/
export function PokemonListItem({ pokemon, types }) {
    return <>
        <img src={`${CONSTANTS.POKEMON_IMAGE_BASE_URL}/${pokemon.id}.svg`} alt={pokemon.name} />

        <h2>#{pokemon.id} {pokemon.name}</h2>

        <div className={style.types}>
            {types.map((type) => (
                <span key={type} className={style.type} style={{backgroundColor: getTypeColor(type)}}>
                    {type}
                </span>
            ))}
        </div>
    </>
}