import {PropsWithChildren, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useApolloClient} from "@apollo/client";
import {ErrorMessage, Loader} from "@/shared/ui";
import {RepositoryService as RepositoryServiceApi} from "../../api/repository-service";
import {useRepositoryStore} from "../../model/repository-state";


export function RepositoryService({children}: PropsWithChildren) {
    const {id} = useParams()
    const client = useApolloClient()
    const [service] = useState(() => new RepositoryServiceApi(client))
    const store = useRepositoryStore()

    const searchRepository = async (id?: string) => {
        if (!id) return store.setError('Invalid repository id');
        store.setLoading(true);
        store.setError(null)
        try {
            const data = await service.getRepository(id);
            store.setRepository(data);
        } catch (e) {
            store.setError(e instanceof Error ? e.message : 'Unknown error-message');
        } finally {
            store.setLoading(false);
        }
    }

    useEffect(() => {
        void searchRepository(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (
        <>
            {store.error &&
                <ErrorMessage
                    message={'store.error'}
                    hide={() => searchRepository(id)}
                />
            }
            {store.loading && <Loader/>}
            {children}
        </>
    )
}