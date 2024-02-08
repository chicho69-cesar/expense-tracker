import { Link } from 'react-router-dom'

import { useTotalExpenses } from '../../hooks'
import { currencyFormatter } from '../../helpers/currency-formatter.js'

export default function TotalExpenses() {
  const { total } = useTotalExpenses()

  return (
    <div className='w-full p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg'>
      <h3 className='text-center text-2xl dark:text-white'>
        Total gastado en el mes:
      </h3>

      <p className='text-center mt-2 mb-4 text-5xl font-bold dark:text-white'>
        {currencyFormatter(total)}
      </p>

      <div className='flex justify-center'>
        <Link to='/add-expense' className='py-1 px-4 bg-indigo-500 text-white font-bold rounded hover:bg-indigo-600 hover:shadow'>
          Agregar Gasto
        </Link>
      </div>
    </div>
  )
}
