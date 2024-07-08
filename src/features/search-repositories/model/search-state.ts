import {create} from "zustand";
import {persist} from "zustand/middleware";

interface SearchState {
    value: string
    change: (value: string) => void
}


export const useSearchStore = create<SearchState>()(
    persist((set) => ({
            value: '',
            change: (value: string) => set({value}),
        }),
        {name: 'search-state'}
    )
)