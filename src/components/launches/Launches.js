import React, { useEffect, useState } from 'react';
import Launch from '../launch/Launch';

const Launches = () => {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(allLauches => {
                setLaunches(allLauches);
            });
    }, []);
    return (
        <div className='list'>
            {
                launches.filter(value =>value.launch_year !== '2020').map((value, index) => 
                    <Launch 
                        value={value} 
                        key={index}
                    />
                )
            }
        </div>
    );
}

export default Launches;
