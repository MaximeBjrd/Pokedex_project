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

export async function getPokemonById(pokemonId) {
    try {
        const res = await fetch(`${import.meta.env.VITE_LOAD_POKEMONS}/${pokemonId}`);
        const data = await res.json()
        return data;
    }
    catch(e) {
        console.error(e);
        return null;
    }
}

export async function updatePokemonLikes(pokemonId, updatedPokemon) {
    try {
        const res = await fetch(`${import.meta.env.VITE_LOAD_POKEMONS}/${pokemonId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
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

export async function loadReviewsById(pokemonId) {
    try {
        const res = await fetch(`${import.meta.env.VITE_LOAD_REVIEWS}?pokemonId=${pokemonId}`);
        const data = await res.json();
        return data;
    }
    catch(e) {
        console.error(e);
        return [];
    }
}

export async function postReview(review) {
    try {
        const res = await fetch(import.meta.env.VITE_LOAD_REVIEWS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review)
        });
        const data = await res.json();
        return data;
    }
    catch(e) {
        console.error(e);
        return null;
    }
}