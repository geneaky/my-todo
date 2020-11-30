import React from 'react';
import Post from './Post';
import './PostList.css';

const PostList = ({post}) =>{


    return(
        <div className="PostList">
            {post.map((pst) => (
                <Post pst={pst}/>
            ))}    
        </div>
    )
}

export default PostList;