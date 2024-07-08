import {useState} from "react";
import {usePageStore} from "@/entities/repositories";
import {Button, Input} from "@/shared/ui";
import {debounced} from "@/shared/lib";
import {useSearchStore} from "../../model/search-state";
import styles from './sytles.module.scss'


export function SearchRepositories() {
    const {value, change} = useSearchStore()
    const {reset} = usePageStore()
    const [localValue, setLocalValue] = useState(value)

    const handleStoreChange = (value: string) => {
        change(value)
        reset()
    }

    const handleChangeValue = (value: string) => {
        setLocalValue(value)
        debounced(() => handleStoreChange(value))
    }

    return (
        <div className={styles.container}>
            <Input
                placeholder="Search repositories"
                value={localValue}
                onChange={(e) => handleChangeValue(e.target.value)}
            />
            <Button onClick={() => handleChangeValue('')}>
                Clear
            </Button>
        </div>
    )
}