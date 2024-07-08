export interface SearchPayload {
    searchString?: string
    first?: number,
    last?: number,
    after?: string,
    before?: string
}

export interface RepositoriesResponse {
    totalCount: number
    edges: Edge[]
    pageInfo: PageInfo
}

export interface Edge {
    node: Repository
}

export interface Repository {
    id: string
    name: string
    description?: string
    stargazerCount: number
    url: string
    defaultBranchRef: DefaultBranchRef
}

export interface DefaultBranchRef {
    target: Branch
}

export interface Branch {
    committedDate: string
}

export interface PageInfo {
    endCursor: string | null
    hasNextPage: boolean
    startCursor: string | null
    hasPreviousPage: boolean
}