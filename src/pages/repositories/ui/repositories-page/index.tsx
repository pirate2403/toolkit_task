import {SearchRepositories, SearchRepositoriesService} from "@/features/search-repositories";
import {RepositoriesTable} from "@/entities/repositories";
import styles from './styles.module.scss'
import {BaseLayout} from "@/shared/ui";

export function RepositoriesPage() {
    return (
        <BaseLayout
            headerContent={<h1>Repositories</h1>}
            content={(
                <SearchRepositoriesService>
                    <div className={styles.content}>
                        <SearchRepositories/>
                        <RepositoriesTable/>
                    </div>
                </SearchRepositoriesService>
            )}
        />
    );
}