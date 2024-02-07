import { useEffect, useState } from 'react'
import { useMonthlyExpenses } from '.'

export default function useExpensesByCategory() {
  const [expensesByCategory, setExpensesByCategory] = useState([])
  const { expenses } = useMonthlyExpenses()

  useEffect(() => {
    const sumOfExpenses = expenses.reduce((acc, el) => {
      const { category, quantity } = el
      acc[category] += quantity

      return acc
    }, {
      'accounts-and-payments': 0,
      'clothes': 0,
      'food': 0,
      'fun': 0,
      'health-and-hygiene': 0,
      'home': 0,
      'shopping': 0,
      'transport': 0,
    })

    setExpensesByCategory(Object.keys(sumOfExpenses).map((sums) => ({
      category: sums,
      quantity: sumOfExpenses[sums],
    })))
  }, [expenses, setExpensesByCategory])

  return {
    expensesByCategory,
  }
}
