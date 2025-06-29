import { useState, useEffect } from "react";
import { loadReviewsById, postReview } from "../../api/pokedex-api";

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
            console.log("Posted review: ", response);
            setContent("");
            const updated = await loadReviewsById(pokemonId);
            console.log("Reviews loaded : ", updated);
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
            />
        </form>

        {reviews.length === 0 
            ? (<p>This Pokemon has no review yet. Post the first one !</p>) 
            : (<ul>
                {reviews.map((review) => (
                    <li key={review.id}> 
                        <p>{review.content}</p>
                        <p>Posted by : {review.author}</p>
                    </li>
                ))}
            </ul>)
        }
    </>
}