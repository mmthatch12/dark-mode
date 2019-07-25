import React, { useState } from 'react'

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValued] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })
}