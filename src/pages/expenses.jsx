import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import MainLayout from '../components/layouts/main-layout'
import CategoryIcons from '../components/structure/category-icons'
import TotalExpenses from '../components/expenses/total-expenses'
import EditIcon from '../assets/icons/edit.svg?react'
import DeleteIcon from '../assets/icons/delete.svg?react'

import { deleteExpense } from '../services/expenses.js'
import { useExpenses } from '../hooks'
import { currencyFormatter } from '../helpers/currency-formatter.js'
import { formatDateInSpanish } from '../helpers/manage-dates.js'

export default function Expenses() {
  const { expenses, getMoreExpenses, thereIsMoreToLoad } = useExpenses()

  const dateIsEqual = (expenses, index, expense) => {
    if (index === 0) return false

    const actualDate = formatDateInSpanish(expense.date)
    const lastExpenseDate = formatDateInSpanish(expenses[index - 1].date)

    return actualDate === lastExpenseDate
  }

  return (
    <MainLayout>
      <Helmet>
        <title>Expense Tracker | Gastos</title>
      </Helmet>

      <main className='w-[95%] md:w-4/5 mx-auto my-8 flex flex-col lg:flex-row justify-start items-start gap-x-8'>
        <section className='w-full lg:w-2/3 order-2 lg:order-1'>
          <h2 className='text-3xl font-bold mb-4 dark:text-white'>
            Lista de Gastos
          </h2>

          <div className='flex flex-col gap-y-4'>
            {expenses.map((expense, index) => (
              <div key={index} className='w-full flex flex-col gap-y-2 justify-center items-start'>
                {!dateIsEqual(expenses, index, expense) && (
                  <span className='py-1 px-6 bg-indigo-500 text-white font-bold rounded-md'>
                    {formatDateInSpanish(expense.date)}
                  </span>
                )}

                <article className='w-full flex flex-row justify-between items-center gap-x-4'>
                  <div className='flex flex-col items-center gap-y-1 uppercase *:size-14 *:rounded-sm dark:text-white'>
                    <CategoryIcons id={expense.category} />
                    {expense.category}
                  </div>

                  <p className='flex-1 dark:text-white text-lg'>
                    {expense.description}
                  </p>

                  <p className='text-lg font-bold dark:text-white'>
                    {currencyFormatter(expense.quantity)}
                  </p>

                  <section className='flex items-center gap-x-2'>
                    <Link to={`/edit/${expense.id}`} className='bg-gray-200 p-2 rounded-md hover:shadow dark:bg-gray-950 dark:text-white'>
                      <EditIcon />
                    </Link>

                    <button onClick={() => deleteExpense({ id: expense.id })} className='bg-gray-200 p-2 rounded-md hover:shadow dark:bg-gray-950 dark:text-white'>
                      <DeleteIcon />
                    </button>
                  </section>
                </article>
              </div>
            ))}

            {thereIsMoreToLoad && (
              <section className='my-4 flex justify-center'>
                <button onClick={getMoreExpenses} className='py-1 px-4 bg-indigo-500 text-white font-bold rounded hover:bg-indigo-600 hover:shadow'>
                  Cargar más...
                </button>
              </section>
            )}

            {expenses.length === 0 && (
              <section className='w-full'>
                <h3 className='text-xl dark:text-white'>
                  No hay gastos por mostrar
                </h3>
              </section>
            )}
          </div>
        </section>

        <div className='w-full lg:w-1/3 order-1 lg:order-2 mb-8 lg:mb-0'>
          <TotalExpenses />
        </div>
      </main>
    </MainLayout>
  )
}
