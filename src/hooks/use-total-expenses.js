import { useContext } from 'react'
import { ExpensesContext } from '../context/expenses'

export default function useTotalExpenses() {
  return useContext(ExpensesContext)
}
