import { useContext } from 'react'
import { UIContext } from '../context/ui'

export default function useUI() {
  const { 
    showAlert, 
    setShowAlert,
    date,
    isDark,
    setDate,
    category,
    setCategory,
    setDarkTheme
  } = useContext(UIContext)

  return {
    showAlert,
    setShowAlert,
    date,
    isDark,
    setDate,
    category,
    setCategory,
    setDarkTheme
  }
}
