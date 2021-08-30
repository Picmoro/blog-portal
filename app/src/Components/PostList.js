import React, {useEffect, useState} from "react";
import axios from "axios";
import {CommentCreate} from "./CommentCreate";
import {CommentList} from "./CommentList";

export const PostList = () => {
    const [posts, setPosts] = useState({});
    const fetchPost = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data);
        console.log(res.data)
    }
    useEffect(() => {
        fetchPost();
    }, [])
    const renderedPost = Object.values(posts).map(post => {
        return <div className={'card'} style={{width: '30%', marginBottom: '20px'}} key={post.id}>
            <div className={"card-body"}>
                <h3>{post.title}</h3>
                <CommentList comments={post.comments}/>
                <CommentCreate id={post.id}/>
            </div>
        </div>
    });
    return <div className={"d-flex flex-row flex-wrap justify-content-between"}>
        {renderedPost}
    </div>
}