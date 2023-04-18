import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { carService } from '../../services/car.service';
import { joiResolver } from "@hookform/resolvers/joi";
import { carValidator } from '../../validators/car.validator';

const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: { errors, isValid }, setValue} = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev)
        reset()
    };

    const update = async (car) => {
        const {data} = await carService.updateById(car.id, car);
        setAllCars(prev => !prev);
        reset()
    }
    return (
        <form className='car-form' onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input
                type="text"
                placeholder={'brand'}
                {...register('brand')}
            />
            
            <input
                type="text"
                placeholder={'price'}
                {...register('price')}
            />
            
            <input
                type="text"
                placeholder={'year'}
                {...register('year')}
            />
            
            <button disabled={!isValid}>{carForUpdate? 'Update':'Save'}</button>
            <div className='errors-block'>
                {errors.brand && <span>{errors.brand.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
            </div>
        </form>
    );
};

export default CarForm;
