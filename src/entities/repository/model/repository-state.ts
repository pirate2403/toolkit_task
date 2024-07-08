import {Repository} from "./interfaces";
import {create} from "zustand";

interface State {
    loading: boolean
    repository: Repository | null
    error: string | null
}

interface RepositoryState extends State {
    setRepository: (repository: Repository) => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
}

const INITIAL_STATE: State = {
    loading: false,
    repository: null,
    error: null
}

export const useRepositoryStore = create<RepositoryState>((set) => ({
    ...INITIAL_STATE,
    setRepository: (repository: Repository) => set({repository}),
    setLoading: (loading: boolean) => set({loading}),
    setError: (error: string | null) => set({error})
}))