import { FilterInput } from "../../components/FilterInput/FilterInput";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { useState, useEffect } from "react";
import { getPokemonList } from "../../api/pokedex-api.js";

export function HomePage() {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPokemonList();
    }, []);

    async function loadPokemonList() {
        try {
            const data = await getPokemonList();
            setPokemons(data);
            setFilteredPokemons(data);
        }
        catch(e) {
            console.error(e);
        }
        finally {
            setLoading(false);
        }
    }

    function handleFilter(search) {
        setSearchTerm(search);
        const lowerSearch = search.toLowerCase();

        const filtered = pokemons.filter((pokemon) => {
            const nameMatches = pokemon.name.toLowerCase().includes(lowerSearch);
            const typeMatches = pokemon.types.some((type) => type.toLowerCase().includes(lowerSearch));
            return nameMatches || typeMatches;
        });

        setFilteredPokemons(filtered);
    }

    return <>
        <FilterInput onFilter={handleFilter} searchTerm={searchTerm}/>

        {loading? (<p>Loading...</p>) : (<PokemonList filteredPokemons={filteredPokemons} searchTerm={searchTerm} />)}
    </>
}