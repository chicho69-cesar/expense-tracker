export function uiReducer(state, action) {
  const { type } = action

  switch (type) {
    case '[UI] - Set Show Alert': {
      return {
        ...state,
        showAlert: action.payload
      }
    }

    case '[UI] - Set Date': {
      return {
        ...state,
        date: action.payload
      }
    }

    case '[UI] - Set Category': {
      return {
        ...state,
        category: action.payload
      }
    }

    case '[UI] - Set DarkTheme': {
      return {
        ...state,
        isDark: !state.isDark
      }
    }

    default: {
      return state
    }
  }
}
