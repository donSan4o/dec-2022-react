import { urls } from "../constants";
import { placeholderAPIService } from "./axios.service";

const commentService = {
    getAll: () => placeholderAPIService.get(urls.comments),
    create: (comment) => placeholderAPIService.post(urls.comments, comment)
}

export {commentService}