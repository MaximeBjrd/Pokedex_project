import style from "./Detail.module.css";

import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import { CONSTANTS } from "../../constants/app-constants";

import { getPokemonById, updatePokemonLikes } from "../../api/pokedex-api";

import { Reviews } from "../../components/Reviews/Reviews";
import { PokemonStats } from "../../components/PokemonStats/PokemonStats";
import { PokemonTypes } from "../../components/PokemonTypes/PokemonTypes";

export function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentId = parseInt(id);
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const isFirst = currentId === 1;
    const isLast = currentId === 151;

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
            <div className={style.navButtons}>
                <button disabled={isFirst} onClick={() => navigate(`/pokemon/${currentId - 1}`)}>
                    Previous
                </button>
                <button disabled={isLast} onClick={() => navigate(`/pokemon/${currentId + 1}`)}>
                    Next
                </button>
            </div>

            <div className={style.details}>
                <div className={style.image}>
                    <img src={`${CONSTANTS.POKEMON_IMAGE_BASE_URL}/${currentPokemon.id}.svg`} alt={currentPokemon.name}/>
                </div>

                <div className={style.infos}>
                    <h2 className={style.name}>{currentPokemon.name}</h2>

                    <button onClick={handleLike} className={style.likeButton}>
                        ❤️ {currentPokemon.like}
                    </button>

                    <PokemonTypes types={currentPokemon.types} />

                    <PokemonStats base={currentPokemon.base}/>
                </div>

                <div className={style.reviews}>
                    <Reviews pokemonId={id}/>
                </div>
            </div>
        </div>
    </>
}