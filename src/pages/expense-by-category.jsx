import { Helmet } from 'react-helmet'

import MainLayout from '../components/layouts/main-layout'
import TotalExpenses from '../components/expenses/total-expenses'
import CategoryIcons from '../components/structure/category-icons'
import { currencyFormatter } from '../helpers/currency-formatter'
import { useExpensesByCategory } from '../hooks'

export default function ExpenseByCategory() {
  const { expensesByCategory } = useExpensesByCategory()

  return (
    <MainLayout>
      <Helmet>
        <title>Expense Tracker | Categorías</title>
      </Helmet>

      <main className='w-[95%] md:w-4/5 mx-auto my-8 flex flex-col lg:flex-row justify-start items-start gap-x-8'>
        <section className='w-full lg:w-2/3 order-2 lg:order-1'>
          <h2 className='text-3xl font-bold mb-4 dark:text-white'>
            Lista de Gastos por Categoría
          </h2>

          <div className='flex flex-col gap-y-4'>
            {expensesByCategory.map((category) => (
              <article
                key={category.category}
                className='flex justify-between items-center gap-x-4 border-b border-gray-200 pb-4'
              >
                <p className='flex justify-start items-center gap-x-4 *:size-14 *:rounded text-lg uppercase dark:text-white'>
                  <CategoryIcons id={category.category} />
                  {category.category}
                </p>

                <p className='text-lg font-bold dark:text-white'>
                  {currencyFormatter(category.quantity)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className='w-full lg:w-1/3 order-1 lg:order-2 mb-8 lg:mb-0'>
          <TotalExpenses />
        </div>
      </main>
    </MainLayout>
  )
}
