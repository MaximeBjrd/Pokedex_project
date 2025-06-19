export async function getPokemonList() {
    try {
        const res = await fetch(import.meta.env.VITE_LOAD_POKEMONS);
        const data = await res.json()
        return data;
    }
    catch(e) {
        console.error(e);
        return [];
    }
}

export async function getPokemonById(id) {
    try {
        const res = await fetch(`${import.meta.env.VITE_LOAD_POKEMONS}/${id}`);
        const data = await res.json()
        return data;
    }
    catch(e) {
        console.error(e);
        return null;
    }
}

export async function updatePokemonLikes(id, updatedPokemon) {
    try {
        const res = await fetch(`${import.meta.env.VITE_LOAD_POKEMONS}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPokemon)
        });

        if(!res.ok) {
            throw new Error("Error during update");
        }

        const data = await res.json()
        return data;
    }
    catch(e) {
        console.error(e);
        return null;
    }
}