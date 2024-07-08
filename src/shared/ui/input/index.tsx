import {InputHTMLAttributes} from "react";
import cn from 'classnames'
import styles from './styles.module.scss'


export function Input({className, ...props}: InputHTMLAttributes<HTMLInputElement>) {
    return <input className={cn(styles.input, className)} {...props}/>
}