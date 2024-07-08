import {Repository} from "..//model/interfaces";

export interface GetRepositoryService {
    getRepository(repoId: string): Promise<Repository>;
}
