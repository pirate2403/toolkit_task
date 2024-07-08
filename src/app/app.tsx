import {ApolloProvider} from "@apollo/client";
import {initApolloClient} from "./appollo";
import {initRouter} from "@/app/router";
import {RouterProvider} from "react-router-dom";

import './styles/styles.scss'

// api
const apiToken = import.meta.env.VITE_API_TOKEN
const apiUri = import.meta.env.VITE_API_URL
const client = initApolloClient(apiUri, apiToken)

//router
const router = initRouter()


export function App() {
    return (
        <ApolloProvider client={client}>
            <RouterProvider router={router}/>
        </ApolloProvider>
    );
}