import { useState } from "react";
import style from "./FilterInput.module.css";

/*
    Input allowing to filter the pokemon list by name or type.
*/
export function FilterInput({onFilter}) {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        const value = e.target.value;
        setSearch(value);
        onFilter(value);
    }

    return <>
        <input 
            type="text" 
            placeholder="Filter the Pokemon list by name or type" 
            value={search}
            onChange={handleChange}
        />
    </>
}