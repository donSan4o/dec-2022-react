import { urls } from "../configs/urls"
import { ICar } from "../interfaces/car.interface"
import { IRes, axiosService } from "./axios.service"

const carService = {
    getAll: ():IRes<ICar[]> => axiosService.get(urls.cars),
    create: (car: ICar):IRes<ICar> => axiosService.post(urls.cars, car),
    getById: (id: number, car: ICar):IRes<ICar> => axiosService.get(`${urls.cars}/${id}`),
    updateById: (id: number, car: ICar):IRes<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id: number):IRes<void> => axiosService.delete(`${urls.cars}/${id}`),
}

export {
    carService
}