import cn from "classnames";
import styles from './styles.module.scss'
import {getPages} from "./helper";

interface Props {
    maxPagesToShow?: number
    currentPage: number,
    totalPages: number,
    onNextClick: () => void
    onPrevClick: () => void
}

export function Paginator({currentPage, totalPages, onNextClick, onPrevClick, maxPagesToShow = 6}: Props) {
    const pages = getPages(totalPages, currentPage, maxPagesToShow);

    if (pages.length < 1) return null;

    return (
        <div className={styles.pagination}>
            {currentPage > 1 && (
                <button onClick={onPrevClick}>
                    &laquo;
                </button>
            )}
            {pages.map(page => (
                <span
                    key={page.id}
                    className={cn({[styles.active]: currentPage === page.id})}
                >
                    {page.title}
                </span>
            ))}
            {currentPage < totalPages && (
                <button onClick={onNextClick}>
                    &raquo;
                </button>
            )}
        </div>
    );
}