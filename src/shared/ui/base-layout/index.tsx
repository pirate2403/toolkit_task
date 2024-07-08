import {ReactNode} from "react";
import styles from "./styles.module.scss";

interface Props {
    headerContent?: ReactNode
    content?: ReactNode
}

export function BaseLayout({headerContent, content}: Props) {
    return (
        <main className={styles.root}>
            {headerContent &&
                <header className={styles.root__header}>
                    {headerContent}
                </header>
            }
            {content}
        </main>
    )
}