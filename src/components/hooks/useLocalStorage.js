import React, { useState } from 'react'

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValued] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })
    const setValue = (value) => {

        setStoredValued(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}