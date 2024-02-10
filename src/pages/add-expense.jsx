import { Helmet } from 'react-helmet'

import ExpensesForm from '../components/form/expenses-form'
import MainLayout from '../components/layouts/main-layout'

export default function AddExpense() {
  return (
    <MainLayout>
      <Helmet>
        <title>Expense Tracker | Agregar Gasto</title>
      </Helmet>

      <ExpensesForm />
    </MainLayout>
  )
}
