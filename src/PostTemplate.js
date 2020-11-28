import React from 'react';

const PostTemplate = ({children,onPost}) =>{
    return(
        <div>
            <div>
                {onPost()}
            </div>
            {children}
        </div>
    )
}

export default PostTemplate;