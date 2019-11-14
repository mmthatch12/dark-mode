import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

const wholeBody = document.querySelector('body')


export const useDarkMode = () => {
    const[darkMode, setDarkMode] = useLocalStorage(false)

    useEffect(() => {
        if(darkMode === true){
            
            wholeBody.classList.add('dark-mode')

        } else {

        wholeBody.classList.remove('dark-mode')
        
    }
    }, [darkMode])
    return[darkMode, setDarkMode]
}
