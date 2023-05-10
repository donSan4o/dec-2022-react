import React from 'react';
import { CarForm } from '../components/CarForm';
import { Cars } from '../components/Cars';

const CarPage = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
}

export {CarPage};
