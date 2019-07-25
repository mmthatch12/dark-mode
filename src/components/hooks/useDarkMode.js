import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = () => {
    const[darkMode, setDarkmode] = useLocalStorage(false)

    useEffect(() => {
        if(darkMode === true){
            const wholeBody = document.querySelector('body')
            return wholeBody.classList.add('dark-mode')   
        }
        return wholeBody.classList.remove('dark-mode')
        
    }, [darkMode])
    return[darkMode, setDarkmode]
}
