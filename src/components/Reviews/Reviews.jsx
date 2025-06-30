import style from "./Reviews.module.css";

import { useState, useEffect } from "react";
import { loadReviewsById, postReview } from "../../api/pokedex-api";

/*
    Review section allowing to post a review and displays the reviews of each pokemon.
*/
export function Reviews({pokemonId}) {
    const [reviews, setReviews] = useState([]);
    const [author, setAuthor] = useState("Me");
    const [content, setContent] = useState("");

    useEffect(() => {
        async function loadReviews() {
            const data = await loadReviewsById(pokemonId);
            setReviews(data);
        }
        loadReviews();
    }, [pokemonId]);

    async function handleSubmit(e) { 
        e.preventDefault();
        if(!content.trim()) return;

        try {
            const newReview = {
                author: author,
                content: content.trim(),
                pokemonId: pokemonId
            };
            const response = await postReview(newReview);
            setContent("");
            const updated = await loadReviewsById(pokemonId);
            setReviews(updated);
        }
        catch(e) {
            console.error(e);
        }
    }

    return <>
        <h3>Reviews</h3>

        <form>
            <input 
                type="text" 
                maxLength={100}
                placeholder="Add a review..." 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                    }
                }}
                className={style.input}
            />
        </form>

        {reviews.length === 0 
            ? (<p>This Pokemon has no review yet. Post the first one !</p>) 
            : (<ul className={style.reviewsList}>
                {reviews.map((review) => (
                    <li key={review.id} className={style.review}> 
                        <p className={style.content}>{review.content}</p>
                        <p className={style.author}>Posted by : {review.author}</p>
                    </li>
                ))}
            </ul>)
        }
    </>
}