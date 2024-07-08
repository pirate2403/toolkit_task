import {TableData} from "@/shared/ui";

export interface RepositoriesTableData extends TableData{
    id: string
    name: string
    stargazerCount: number
    committedDate: string
    github: string
}