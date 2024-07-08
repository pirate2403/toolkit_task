import {PropsWithChildren, useEffect, useState} from "react";
import {useApolloClient} from "@apollo/client";
import {useRepositoriesStore, usePageStore, SearchPayload} from "@/entities/repositories";
import {ErrorMessage, Loader} from "@/shared/ui";
import {SearchService} from "../../api/search-service";
import {useSearchStore} from "../../model/search-state";


export function SearchRepositoriesService({children}: PropsWithChildren) {
    const client = useApolloClient()
    const [service] = useState(() => new SearchService(client))
    const store = useRepositoriesStore()
    const searchState = useSearchStore()
    const pageStore = usePageStore()

    const searchRepositories = async (payload: SearchPayload) => {
        store.setLoading(true);
        try {
            const data = await service.searchRepositories(payload);
            store.setData(data);
            pageStore.setPageInfo(data.pageInfo);
        } catch (e) {
            store.setError(e instanceof Error ? e.message : 'Unknown error-message');
        } finally {
            store.setLoading(false);
        }
    }

    useEffect(() => {
        void searchRepositories({searchString: searchState.value, ...pageStore.payload})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        void searchRepositories({searchString: searchState.value, ...pageStore.payload})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchState.value, pageStore.currentPage]);


    return (
        <>
            {store.error &&
                <ErrorMessage
                    message={'store.error'}
                    hide={() => searchRepositories({searchString: searchState.value, ...pageStore.payload})}
                />
            }
            {store.loading && <Loader/>}
            {children}
        </>
    )
}