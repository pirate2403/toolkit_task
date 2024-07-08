import {gql} from "@apollo/client";

export const GET_REPOSITORY = gql`
    query($repoId: ID!) {
        node(id: $repoId) {
            ... on Repository {
                name
                url
                stargazerCount
                owner {
                    login
                    url
                    avatarUrl
                }
                description
                languages(first: 10) {
                    nodes {
                        name
                    }
                }
                defaultBranchRef {
                    target {
                        ... on Commit {
                            committedDate
                        }
                    }
                }
            }
        }
    }
`
