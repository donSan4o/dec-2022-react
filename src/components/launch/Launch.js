import React from 'react';

const Launch = ({value}) => {
    return (
        <div className='list-item'>
                <img src={value.links.mission_patch_small} alt={value.mission_name}/>
                <p>{value.mission_name}</p>
                <p>{value.launch_year}</p>
        </div>
    );
}

export default Launch;
