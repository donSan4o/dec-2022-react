import { urls } from "../constants/urls";
import { axiosService } from "./axios.service";

class CommentService {
    getAll() {
        return axiosService.get(urls.comments)
    }
}

export const commentService = new CommentService()