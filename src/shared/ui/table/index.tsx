import {ReactNode} from "react";
import style from './styles.module.scss'

export interface TableData {
    id: string | number;
    [key: string]: string | number | ReactNode;
}

export interface TableColumn<T = TableData> {
    title: string;
    dataIndex: keyof T;
    key: string;
    customRender?: (data: T) => ReactNode;
}

interface Props<T = TableData> {
    data: T[];
    columns: TableColumn<T>[];
    onRowClick?: (id: TableData['id']) => void
}

export function Table<T extends TableData = TableData>({data, columns, onRowClick}: Props<T>) {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    {columns.map(col => (
                        <th key={col.key}>{col.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? data.map((item) => (
                    <tr key={item.id} onClick={() => onRowClick?.(item.id)}>
                        {columns.map(col => (
                            <th key={col.key}>{col.customRender?.(item) || item[col.dataIndex]}</th>
                        ))}
                    </tr>
                )): (
                    <tr>
                        <th>No data available</th>
                    </tr>
                )}
            </tbody>
        </table>
    );
}