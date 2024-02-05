import { useReducer } from 'react'
import { PropTypes } from 'prop-types'

import { UIContext, uiReducer } from '.'

const UI_INITIAL_STATE = {
  showAlert: false,
  date: new Date(),
  category: 'home',
  isDark: document.body.classList.contains('dark') ? true : false,
}

export function UIProvider({ children }) {
  const [{ showAlert, date, category, isDark }, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const setShowAlert = (isShowingAlert) => {
    dispatch({ type: '[UI] - Set Show Alert', payload: isShowingAlert })
  }

  const setDate = (newDate) => {
    dispatch({ type: '[UI] - Set Date', payload: newDate })
  }

  const setCategory = (newCategory) => {
    dispatch({ type: '[UI] - Set Category', payload: newCategory })
  }

  const setDarkTheme = () => {
    document.body.classList.toggle('dark')
    dispatch({ type: '[UI] - Set DarkTheme' })
  }

  return (
    <UIContext.Provider
      value={{
        // Properties
        showAlert,
        date,
        category,
        isDark,

        // Methods
        setShowAlert,
        setDate,
        setCategory,
        setDarkTheme
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

UIProvider.propTypes = {
  children: PropTypes.node.isRequired
}
