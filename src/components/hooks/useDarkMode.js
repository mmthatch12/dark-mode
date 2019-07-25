import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

const[someValue, setSomeValue] = useLocalStorage('mykey')