'use client'

import Post from './../post/page'
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./../../../firebase";


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"), orderBy("timestamp", "desc")),
                (snapshot) => setPosts(snapshot.docs)
            ),
        []
    );

    return (
        <>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    userName={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                /> 
            ))}
        </>

    );
}

export default Posts;