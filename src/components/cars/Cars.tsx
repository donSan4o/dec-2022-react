import React, {FC} from 'react';
import {Car} from '../car/Car';
import { ICar } from '../../interfaces/car.interface';
import { IUseState } from '../../types/useState.type';

interface IProps {
    cars: ICar[];
    setCarForUpdate: IUseState<ICar|null>;
    setOnChange: IUseState<boolean>
}
const Cars: FC<IProps> = ({cars, setCarForUpdate, setOnChange}) => {
    return (
        <div>
            <div className='car-wrapper'>
                {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>)}
            </div>
        </div>
    );
};

export {Cars};
