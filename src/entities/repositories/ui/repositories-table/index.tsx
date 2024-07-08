import {useNavigate} from "react-router-dom";
import {Paginator, Table} from "@/shared/ui";
import {useRepositoriesStore} from "../../model/repositories-state";
import {usePageStore} from "../../model/page-state";
import {COLUMNS} from "./const.tsx";
import {RepositoriesTableData} from "./interfaces.ts";
import styles from './styles.module.scss'


export function RepositoriesTable() {
    const navigate = useNavigate()
    const {currentPage, itemCount, goPrevPage, goNextPage} = usePageStore()
    const {repositories, totalElements} = useRepositoriesStore()


    const tableData = repositories().map<RepositoriesTableData>(repository => ({
        id: repository.id,
        name: repository.name,
        stargazerCount: repository.stargazerCount,
        committedDate: repository.defaultBranchRef?.target.committedDate,
        github: repository.url
    }))

    return (
        <div className={styles.container}>
            <Table<RepositoriesTableData> data={tableData} columns={COLUMNS} onRowClick={(id) => navigate(`/${id}`)}/>
            <Paginator
                currentPage={currentPage}
                totalPages={Math.ceil(totalElements() / itemCount)}
                onNextClick={goNextPage}
                onPrevClick={goPrevPage}
            />
        </div>
    );
}