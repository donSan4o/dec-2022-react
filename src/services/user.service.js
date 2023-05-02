import { urls } from "../constants/urls";
import { axiosService } from "./axios.service";

class UserService {
    getAll() {
        return axiosService.get(urls.users)
    }
}

export const userService = new UserService()