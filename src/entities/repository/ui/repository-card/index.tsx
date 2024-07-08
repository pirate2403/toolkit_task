import {Button} from "@/shared/ui";
import {NavLink} from "react-router-dom";
import {useRepositoryStore} from "../../model/repository-state";
import styles from "./styles.module.scss";

export function RepositoryCard() {
    const {repository} = useRepositoryStore()

    if (!repository) return null

    return (
        <div className={styles.repository}>
            <div className={styles.repository__card}>
                <div className={styles.repository__info}>
                    <div className={styles.repository__owner}>
                        <img src={repository.owner.avatarUrl} alt="Фото владельца"/>
                        <NavLink to={repository.owner.url}>{repository.owner.login}</NavLink>
                    </div>
                    <br/>
                    <h3><b>Repository name:</b> {repository.name}</h3>
                    <p><b>Description:</b> {repository.description}</p>
                    <p><b>Languages:</b> {repository.languages.nodes?.map(lang => lang.name).join(", ")}</p>
                    <p><b>Stars:</b> {repository.stargazerCount}</p>
                    <p><b>Last update:</b> {repository.defaultBranchRef?.target.committedDate}</p>
                </div>
                <br/>
                <NavLink to={repository.url} target='_blank'>
                    <Button>Смотреть репозиторий</Button>
                </NavLink>
            </div>
        </div>
    )
}