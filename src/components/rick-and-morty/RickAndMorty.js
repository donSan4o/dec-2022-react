function RickAndMorty({ data: rickAndMorty }) {
    return (
        <div className="list">
            {
                rickAndMorty.map(value => (
                    <div className="list-item">
                        <img src={value.image} alt={value.name} />
                        <div>Name - {value.name}</div>
                        <div>Status - {value.status}</div>
                        <div>Species - {value.species}</div>
                        <div>Gender - {value.gender}</div>
                        <div>
                            Origin - <a href={value.origin.url}>{value.origin.name}</a>
                        </div>
                        <div>
                            Location - <a href={value.location.url}>{value.location.name}</a>
                        </div>
                        <div>Episodes:</div>
                        {
                            value.episode.map(index => (
                                <ul>
                                    <li><a href={index}>{index}</a></li>
                                </ul>
                            ))
                        }
                        <div>URL - <a href={value.url}>{value.url}</a></div>
                        <div>Created - {value.created}</div>
                    </div> 
                ))
            }
        </div>
    )
}

export default RickAndMorty
