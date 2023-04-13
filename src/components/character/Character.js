import React from 'react';
import EpisodesList from '../episodes/Episodes';

const Character = ({character}) => {
    return (
        <div className="list-item">
            <img src={character.image} alt={character.name} />
            <div>Name - {character.name}</div>
            <div>Status - {character.status}</div>
            <div>Species - {character.species}</div>
            <div>Gender - {character.gender}</div>
            <div>
                Origin - <a href={character.origin.url}>{character.origin.name}</a>
            </div>
            <div>
                Location - <a href={character.location.url}>{character.location.name}</a>
            </div>
            <div className="episodes">
                <span className="title">Episodes:</span>
                {
                    character.episode.map((value, index) => (
                        <EpisodesList episode={value} key={index}/>
                    ))
                }
            </div>
            <div>URL - <a href={character.url}>{character.url}</a></div>
            <div>Created - {character.created}</div>
        </div> 
    );
}

export default Character;
