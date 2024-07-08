import {create} from "zustand";
import {persist} from 'zustand/middleware';
import {PageInfo, SearchPayload} from "@/entities/repositories";

interface State {
    itemCount: number
    currentPage: number
    pageInfo: PageInfo
    payload: SearchPayload
}

interface RepositoriesState extends State {
    setPageInfo: (pageInfo: PageInfo) => void
    goPrevPage: () => void
    goNextPage: () => void
    reset: () => void
}

const INITIAL_STATE: State = {
    itemCount: 10,
    currentPage: 1,
    payload: {first: 10},
    pageInfo: {hasNextPage: false, endCursor: null, hasPreviousPage: false, startCursor: null},
}

export const usePageStore = create<RepositoriesState>()(
    persist(
        (set, get) => ({
            ...INITIAL_STATE,
            setPageInfo: (pageInfo: PageInfo) => set({pageInfo}),
            reset: () => set(INITIAL_STATE),
            goPrevPage: () => {
                const {currentPage, pageInfo, itemCount} = get();
                set({
                    currentPage: currentPage - 1,
                    payload: {
                        last: itemCount,
                        before: pageInfo.startCursor ?? ''
                    }
                })
            },
            goNextPage: () => {
                const {currentPage, pageInfo, itemCount} = get();
                set({
                    currentPage: currentPage + 1,
                    payload: {
                        first: itemCount,
                        after: pageInfo.endCursor ?? ''
                    }
                })
            },
        }),
        {
            name: 'page-state',
        }
    )
)