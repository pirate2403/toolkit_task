import {createBrowserRouter} from "react-router-dom";
import {RepositoriesPage} from "@/pages/repositories";
import {RepositoryPage} from "@/pages/repository";

export function initRouter() {
    return createBrowserRouter([
        {
            path: "/",
            element: <RepositoriesPage/>,
        },
        {
            path: "/:id",
            element: <RepositoryPage/>
        }
    ])
}