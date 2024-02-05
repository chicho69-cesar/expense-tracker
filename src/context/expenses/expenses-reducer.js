export function expensesReducer(state, action) {
  const { type } = action

  switch (type) {
    case '[EXPENSES] - Set Total': {
      return {
        ...state,
        total: action.payload
      }
    }

    default: {
      return state
    }
  }
}