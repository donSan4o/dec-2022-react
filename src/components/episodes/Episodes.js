import React from 'react';

const EpisodesList = ({episode}) => {
    return (
        <div>
            <a href={episode}>{episode}</a>
        </div>
    )
}

export default EpisodesList
