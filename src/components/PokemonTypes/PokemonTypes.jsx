import style from "./PokemonTypes.module.css";

import { getTypeColor } from "../../api/pokedex-api";

/*
    Displays pokemon types using the color matching its type.
*/
export function PokemonTypes({ types }) {
    return <>
        <div className={style.types}>
            {types.map((type) => (
                <span key={type} className={style.type} style={{backgroundColor: getTypeColor(type)}}>
                    {type}
                </span>
            ))}
        </div>
    </>
}