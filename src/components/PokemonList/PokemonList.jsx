import { PokemonListItem } from "./PokemonListItem/PokemonListItem";
import { Link } from "react-router";

/*
    Displays the list of pokemon card according to the input value.
*/
export function PokemonList({filteredPokemons, searchTerm}) {
    if(filteredPokemons.length === 0) {
        return <p>Aucun résultat pour la recherche: "{searchTerm}"</p>
    }

    return <>
        <div>
            {filteredPokemons.map((pokemon) => (
                <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                    <PokemonListItem pokemon={pokemon} />
                </Link>
            ))}
        </div>
    </>
}