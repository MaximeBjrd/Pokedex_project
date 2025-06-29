import style from "./PokemonStats.module.css";

import { MAX_STAT } from "../../constants/app-constants";

const STAT_NAMES = {
    "HP": "hp",
    "Attack": "attack",
    "Defense": "defense",
    "Special attack": "specialAttack",
    "Special defense": "specialDefense",
    "Speed": "speed"
};

/*
    Displays the pokemon stats with a progress bar.
*/
export function PokemonStats({ base }) {
    return <div className={style.statsContainer}>
        {Object.entries(base).map(([label, value]) => {
            const key = STAT_NAMES[label];
            const max = MAX_STAT[key];
            const progressBarLength = Math.round((value / max) * 100);

            return(
                <div key={label} className={style.statRow}>
                    <p className={style.statInfo}> {label} </p>
                    <p className={style.statInfo}> {value} </p>
                    
                    <div className={style.statBar}>
                        <div className={style.statBarFill} style={{ width: `${progressBarLength}%` }}></div>
                    </div>
                </div>
            )
        })
        }
    </div>
}