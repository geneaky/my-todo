import React from 'react';
import './Post.css'

const Post = ({pst}) =>{
    const {id,text} = pst;
    return(
        <div>
            <div className="postbox">
                <div>
                    {text}
                </div>
                <div>
                    {id}
                </div>
            </div>

        </div>
    )
}

export default Post;