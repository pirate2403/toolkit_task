type DebouncedFunc<P = unknown> = (...args: P[]) => void

export function debounce<P = unknown, T extends DebouncedFunc<P> = DebouncedFunc<P>>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null;

    return function (...args: Parameters<T>): void {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(later, wait);
    };
}

export const debounced = debounce<() => void>((cb) => cb(), 300)