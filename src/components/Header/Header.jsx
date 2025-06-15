import style from "./Header.module.css"
import { Link } from "react-router";
import { ROUTES } from "../../config/routes";
import { CONSTANTS } from "../../constants/app-constants";

/*
    Displays the app logo and redirects to the home page when clicked on.
*/
export function Header() {
    return <div className={style.header}>
        <Link to={ROUTES.HOME}>
            <img src={CONSTANTS.POKEBALL} alt="Pokeball image" />
            <img src={CONSTANTS.POKEDEX} alt="Pokedex image" />
        </Link>
    </div>
}