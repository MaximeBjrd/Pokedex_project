export async function getPokemonList() {
    try {
        const res = await fetch(import.meta.env.VITE_LOAD_POKEMONS);
        const data = await res.json()
        return data;
    }
    catch(error) {
        console.error(error);
        return [];
    }
}