function Simpsons({ data: simpsons }) {
    return (
        <div>
            {
                simpsons.map(value => (
                    <div>
                        <div>Name - {value.name}</div>
                        <div>Surname - {value.surname}</div>
                        <div>Age - {value.age}</div>
                        <p>{value.info}</p>
                        <img src={value.photo} alt={value.name} />
                        
                    </div>
                ))
            }
        </div>
    );
}

export default Simpsons;
