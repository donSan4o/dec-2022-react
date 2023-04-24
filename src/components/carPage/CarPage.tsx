import React, { FC, useEffect, useState } from 'react';
import { carService } from '../../services/car.service';
import {Cars} from '../cars/Cars';
import { ICar } from '../../interfaces/car.interface';
import {CarForm} from '../carForm/CarForm';



interface IProps {
}

const CarPage: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [onChange, setOnChange] = useState<boolean>(false);
    const [carForUpdate, setCarForUpdate] = useState<ICar|null>(null);

    useEffect(() => {
        carService
            .getAll()
            .then(value => value.data)
            .then(value => setCars(value));
    }, [onChange]);
    return (
        <div>
            <CarForm setOnChange={setOnChange} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} />
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>
        </div>
    );
};

export {CarPage}
