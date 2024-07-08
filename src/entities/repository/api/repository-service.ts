import {GetRepositoryService} from "./interfaces";
import {Repository, RepositoryResponse} from "../model/interfaces";
import {ApolloClient} from "@apollo/client";
import {GET_REPOSITORY} from "@/entities/repository/api/queries.ts";

export class RepositoryService implements GetRepositoryService {
    constructor(private _client: ApolloClient<NonNullable<unknown>>) {
    }

    async getRepository(repoId: string): Promise<Repository> {
        const result = await this._client.query<RepositoryResponse>({
            query: GET_REPOSITORY,
            variables: {repoId}
        });
        return result.data.node
    }

}