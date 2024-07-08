import {RepositoriesResponse} from "@/entities/repositories";

export interface AllRepositoriesResponse {
    search: RepositoriesResponse

}

export interface UserRepositoriesResponse {
    viewer: {
        repositories: RepositoriesResponse
    }
}