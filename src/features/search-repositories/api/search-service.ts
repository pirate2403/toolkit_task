import {ApolloClient} from "@apollo/client";
import {SearchPayload, SearchRepositoriesService} from "@/entities/repositories";
import {SEARCH_REPOSITORIES, USER_REPOSITORIES} from "./queries.ts";
import {AllRepositoriesResponse, UserRepositoriesResponse} from "../model/interfaces";


export class SearchService implements SearchRepositoriesService {
    constructor(private _client: ApolloClient<NonNullable<unknown>>) {
    }

    private async _searchAllRepositories(payload: SearchPayload) {
        const result = await this._client.query<AllRepositoriesResponse>({
            query: SEARCH_REPOSITORIES,
            variables: {
                queryString: payload.searchString,
                first: payload.first,
                last: payload.last,
                after: payload.after,
                before: payload.before
            }
        });
        return result.data.search
    }

    private async _searchUserRepositories(payload: SearchPayload) {
        const result = await this._client.query<UserRepositoriesResponse>({
            query: USER_REPOSITORIES,
            variables: {
                first: payload.first,
                last: payload.last,
                after: payload.after,
                before: payload.before
            }
        });
        return (result.data.viewer.repositories)
    }


    async searchRepositories(payload: SearchPayload) {
        if (payload.searchString) return this._searchAllRepositories(payload)
        return this._searchUserRepositories(payload)
    }
}

