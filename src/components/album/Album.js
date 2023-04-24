import React from 'react';

const Album = ({item}) => {
    return (
        <div className='list-item'>
            {item.id} - {item.title}
        </div>
    );
}

export default Album;
