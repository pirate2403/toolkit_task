import {RepositoriesResponse, SearchPayload} from "../model/interfaces";

export interface SearchRepositoriesService {
    searchRepositories: (payload: SearchPayload) => Promise<RepositoriesResponse>
}