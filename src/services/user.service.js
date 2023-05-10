import { urls } from '../constants';
import { placeholderAPIService } from './axios.service';

const userService = {
    getAll: () => placeholderAPIService.get(urls.users),
    create: (user) => placeholderAPIService.post(urls.users, user),
};
export { userService };
