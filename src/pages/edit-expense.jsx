import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import MainLayout from '../components/layouts/main-layout'
import { useExpenseById } from '../hooks'
import ExpensesForm from '../components/form/expenses-form'

export default function EditExpense() {
  const { id } = useParams()
  const { expense } = useExpenseById({ id })

  return (
    <MainLayout>
      <Helmet>
        <title>Expense Tracker | Editar Gasto</title>
      </Helmet>

      <ExpensesForm expense={expense} />
    </MainLayout>
  )
}
