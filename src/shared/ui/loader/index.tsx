import styles from './styles.module.scss'

export function Loader() {
    return (
        <div className={styles.overlay}>
            <div className={styles.loader}></div>
        </div>
    )
}