import {gql} from "@apollo/client";

export const USER_REPOSITORIES = gql`
    query GetUserRepositories($first: Int, $last: Int, $after: String, $before: String) {
        viewer {
            repositories(first: $first, last: $last, after: $after, before: $before) {
                totalCount
                edges {
                    node {
                        id
                        name
                        description
                        stargazerCount
                        url
                        defaultBranchRef {
                            target {
                                ... on Commit {
                                    committedDate
                                }
                            }
                        }
                    }
                }
                pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                }
            }
        }
    }
`

export const SEARCH_REPOSITORIES = gql`
    query SearchRepositories($queryString: String!, $first: Int, $last: Int, $after: String, $before: String) {
      search(query: $queryString, type: REPOSITORY, first: $first, last: $last, after: $after, before: $before) {
        totalCount: repositoryCount
        edges {
          node {
            ... on Repository {
              id
              name
              description
              stargazerCount
              url
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
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
`