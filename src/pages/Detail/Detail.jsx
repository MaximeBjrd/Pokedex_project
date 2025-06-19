import { useNavigate, useParams } from "react-router";
import { CONSTANTS } from "../../constants/app-constants";
import { useEffect, useState } from "react";
import { getPokemonById, updatePokemonLikes } from "../../api/pokedex-api";

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
                <ul>
                    {Object.entries(currentPokemon.base).map(([statName, value]) => (
                        <li key={statName}> {statName}: {value} </li>
                    ))}
                </ul>

                <button onClick={handleLike}>Likes: {currentPokemon.like}</button>
            </div>
        </div>
    </>
}