import { useEffect, useState } from "react";
import Post from "../Components/Post";

export default function Home() {
    const [ posts, setPost ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/post').then(response => {
            response.json().then(posts => {
                setPost(posts);

            });        
        });
    }, []);
    return(
        <>
        {posts.length > 0 && posts.map(post => (
            <Post {...post} />
        ))}
        </>
    )
}