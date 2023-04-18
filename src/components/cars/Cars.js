import React, { useEffect, useState } from 'react';
import Car from '../car/Car';
import {carService} from '../../services/car.service';
import CarForm from '../carForm/CarForm';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null)
    useEffect(() => {
        carService
            .getAll()
            .then((value) => value.data)
            .then((value) => setCars(value));
    }, [allCars]);
    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            <div className='car-wrapper'>
                {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
            </div>
        </div>
    );
};

export default Cars;
