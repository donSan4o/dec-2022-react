import Character from "../character/Character"

function RickAndMorty({ data: rickAndMorty }) {
    return (
        <div className="list">
            {
                rickAndMorty.map((value, index) => (
                    <Character character={value} key={index}/>
                ))
            }
        </div>
    )
}

export default RickAndMorty
