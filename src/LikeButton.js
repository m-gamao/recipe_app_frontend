//Emoji's always have to be wrapped in a span. 
import React from 'react'

const LikeButton = () => {
    const handleLikeClick = event => {
        //
    }

    return (
        <div className="like_button">
            <span role='img' aria-label='heart button'>❤️</span>
        </div>
    )
}

export default LikeButton
