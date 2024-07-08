export interface RepositoryResponse {
    node: Repository
}

export interface Repository {
    name: string
    url: string
    stargazerCount: number
    owner: Owner
    description: string
    languages: Languages
    defaultBranchRef: DefaultBranchRef
}

export interface Owner {
    login: string
    url: string
    avatarUrl: string
}

export interface Languages {
    nodes: LanguageNode[]
}

export interface LanguageNode {
    name: string
}

export interface DefaultBranchRef {
    target: Target
}

export interface Target {
    committedDate: string
}
