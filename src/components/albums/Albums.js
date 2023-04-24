import React, { useState, useEffect } from 'react';
import ApiService from '../../services/api.service';
import Album from '../album/Album';

const Albums = () => {
    let apiService = new ApiService('albums');
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        apiService.getAllData().then(value => {
            setAlbums([...value])
        })
    }, []);
    return (
        <div>
            <h3>List of Albums</h3>
            <div className="list">
                {
                    albums.map(value => <Album key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}

export default Albums;
