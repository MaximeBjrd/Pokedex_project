import style from "./PokemonListItem.module.css";

import { CONSTANTS } from "../../../constants/app-constants";

import { getTypeColor } from "../../../api/pokedex-api";

/*
    Displays the card of each pokemon.
*/
export function PokemonListItem({ pokemon, types }) {
    return <>
        <div className={style.card}>
            <img src={`${CONSTANTS.POKEMON_IMAGE_BASE_URL}/${pokemon.id}.svg`} alt={pokemon.name} />

            <p className={style.name}>#{pokemon.id} {pokemon.name}</p>

            <div className={style.types}>
                {types.map((type) => (
                    <span key={type} className={style.type} style={{backgroundColor: getTypeColor(type)}}>
                        {type}
                    </span>
                ))}
            </div>
        </div>
    </>
}