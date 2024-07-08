import {ButtonHTMLAttributes, PropsWithChildren} from "react";
import cn from 'classnames'
import styles from './styles.module.scss'


export function Button({className, ...props}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
    return <button className={cn(styles.button, className)} {...props}></button>
}