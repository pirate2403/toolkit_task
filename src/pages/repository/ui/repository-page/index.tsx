import {BaseLayout} from "@/shared/ui";
import {RepositoryCard, RepositoryService} from "@/entities/repository";

export function RepositoryPage() {
    return (
        <BaseLayout
            headerContent={<h1>RepositoryCard</h1>}
            content={
                <RepositoryService>
                    <RepositoryCard/>
                </RepositoryService>
            }
        />
    );
}