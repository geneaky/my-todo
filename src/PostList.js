import React from 'react';
import Post from './Post';
import './PostList.css';

const PostList = ({post,onPost}) =>{



    for(var i=0; i<100;i++){
        onPost();
    }


    return(
        <div className="PostList">
            {post.map((pst) => (
                <Post pst={pst}/>
            ))}    
        </div>
    )
}

export default PostList;