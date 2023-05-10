import React from 'react';
import { CarForm } from '../components/CarForm';
import { Cars } from '../components/Cars';
import { useSelector } from 'react-redux';

const CarPage = () => {
    const { error, loading } = useSelector((state) => state.cars);
    return (
        <div>
            <CarForm />
            {error && <span>{JSON.stringify(error)}</span>}
            {loading && <span>Loading...</span>}
            <Cars />
        </div>
    );
};

export { CarPage };
