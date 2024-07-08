import dayjs from "dayjs";
import {TableColumn} from "@/shared/ui";
import {RepositoriesTableData} from "./interfaces.ts";
import {NavLink} from "react-router-dom";

export const COLUMNS: TableColumn<RepositoriesTableData>[] = [
    {
        title: "Name",
        dataIndex: "name",
        key: 'name',
    },
    {
        title: "Stars",
        dataIndex: "stargazerCount",
        key: 'stargazerCount',
    },
    {
        title: "Committed Date",
        dataIndex: "committedDate",
        key: 'committedDate',
        customRender: (value) => dayjs(value.committedDate).format('DD.MM.YYYY')
    },
    {
        title: "Github",
        dataIndex: "github",
        key: 'github',
        customRender: (value) => <NavLink to={value.github} target='_blank'>{value.github}</NavLink>
    },
]