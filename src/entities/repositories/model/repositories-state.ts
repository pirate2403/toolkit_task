import {create} from "zustand";
import {RepositoriesResponse, Repository} from "../api/interfaces";

interface RepositoriesState {
    loading: boolean
    data: RepositoriesResponse | null
    error: string | null
    repositories: () => Repository[]
    totalElements: () => number
    setData: (data: RepositoriesResponse) => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void,
}

export const useRepositoriesStore = create<RepositoriesState>((set, get) => ({
    loading: false,
    data: null,
    error: null,
    repositories: () => get().data?.edges.map(edge => edge.node) || [],
    totalElements: () => get().data?.totalCount || 0,
    setData: (data: RepositoriesResponse) => set({data}),
    setLoading: (loading: boolean) => set({loading}),
    setError: (error: string | null) => set({error})
}))