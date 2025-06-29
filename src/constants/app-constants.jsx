import pokeballImg from "../assets/pokeball.png";
import pokedexImg from "../assets/pokedex.png";
import pokeballBg from "../assets/pokeball_bg.svg";

export const CONSTANTS = {
    POKEBALL: pokeballImg,
    POKEDEX: pokedexImg,
    POKEBALL_BG: pokeballBg,

    POKEMON_IMAGE_BASE_URL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world",
}

export const MAX_STAT = {
    attack: 130,
    defense: 180,
    specialAttack: 135,
    specialDefense: 120,
    speed: 120,
    hp: 105,
};

export const PKMN_TYPES = Object.freeze([
{ name: "normal", color: "#A8A77A" },
{ name: "fighting", color: "#C22E28" },
{ name: "flying", color: "#A98FF3" },
{ name: "poison", color: "#A33EA1" },
{ name: "ground", color: "#E2BF65" },
{ name: "rock", color: "#B6A136" },
{ name: "bug", color: "#A6B91A" },
{ name: "ghost", color: "#735797" },
{ name: "steel", color: "#B7B7CE" },
{ name: "fire", color: "#EE8130" },
{ name: "water", color: "#6390F0" },
{ name: "grass", color: "#7AC74C" },
{ name: "electric", color: "#F7D02C" },
{ name: "psychic", color: "#F95587" },
{ name: "ice", color: "#96D9D6" },
{ name: "dragon", color: "#6F35FC" },
{ name: "dark", color: "#705746" },
{ name: "fairy", color: "#D685AD" },
{ name: "unknown", color: "#68A090" },
{ name: "shadow", color: "#705898" },
]);