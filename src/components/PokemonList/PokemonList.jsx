import style from "./PokemonList.module.css";

import { PokemonListItem } from "./PokemonListItem/PokemonListItem";
import { Link } from "react-router";

/*
    Displays the list of pokemon card according to the input value.
*/
export function PokemonList({filteredPokemons, searchTerm}) {
    if(filteredPokemons.length === 0) {
        return <p className={style.noResult}>Aucun résultat pour la recherche: "{searchTerm}"</p>
    }

    return <>
        <div className={style.list}>
            {filteredPokemons.map((pokemon) => (
                <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} className={style.link}>
                    <PokemonListItem pokemon={pokemon} types={pokemon.types} />
                </Link>
            ))}
        </div>
    </>
}