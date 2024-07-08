import styles from './styles.module.scss'

interface Props {
    message: string
    hide?: () => void
}

export function ErrorMessage({message}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.error}>
                <p><strong>Ошибка</strong></p>
                <p>{message}</p>
                <button className={styles.close} onClick={undefined}>&times;</button>
            </div>
        </div>
    )
}