import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';


export function initApolloClient(uri = '', token = '') {
    const httpLink = createHttpLink({uri});

    const authLink = setContext((_, {headers}) => ({
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }));

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
}