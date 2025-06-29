import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import { CONSTANTS } from "../../constants/app-constants";

import { getPokemonById, updatePokemonLikes } from "../../api/pokedex-api";

import { Reviews } from "../../components/Reviews/Reviews";
import { PokemonStats } from "../../components/PokemonStats/PokemonStats";

export function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentId = parseInt(id);
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemon();
    }, [id]);

    async function fetchPokemon() {
        try {
            const data = await getPokemonById(id);
            setCurrentPokemon(data);
        }
        catch(e) {
            console.error(e);
        }
        finally {
            setLoading(false);
        }
    }

    async function handleLike() {
        const updatedPokemon = {
            ...currentPokemon,
            like: currentPokemon.like + 1
        }

        await updatePokemonLikes(id, updatedPokemon);
        setCurrentPokemon(updatedPokemon);
    }

    if(loading) {
        return <p>Loading...</p>
    }

    return <>
        <div>
            <div>
                {(currentId > 1) && (<button onClick={() => navigate(`/pokemon/${currentId - 1}`)}>Previous</button>)}
                {(currentId < 151) && (<button onClick={() => navigate(`/pokemon/${currentId + 1}`)}>Next</button>)}
            </div>

            <div>
                <img src={`${CONSTANTS.POKEMON_IMAGE_BASE_URL}/${currentPokemon.id}.svg`} alt={currentPokemon.name}/>
                
                <h2>{currentPokemon.name}</h2>
                <p>{currentPokemon.types.join(", ")}</p>

                <PokemonStats base={currentPokemon.base}/>

                <button onClick={handleLike}>Likes: {currentPokemon.like}</button>
            </div>

            <div>
                <Reviews pokemonId={id}/>
            </div>
        </div>
    </>
}