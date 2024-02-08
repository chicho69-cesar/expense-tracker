import fromUnixTime from 'date-fns/fromUnixTime'
import getUnixTime from 'date-fns/getUnixTime'
import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PlusIcon from '../../assets/icons/plus.svg?react'
import { useAuth, useUI } from '../../hooks'
import { addExpense, updateExpense } from '../../services/expenses.js'
import CategoriesSelect from '../form/categories-select'
import DatePicker from '../form/date-picker'
import Alert from '../ui/alert'

export default function ExpensesForm({ expense }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [alert, setAlert] = useState({})

  const navigate = useNavigate()
  const { user } = useAuth()
  const { category, setCategory, date, setDate, setShowAlert } = useUI()

  useEffect(() => {
    if (expense) {
      if (expense.data().uidUser === user.uid) {
        const expenseData = expense.data()

        setCategory(expenseData.category)
        setDate(fromUnixTime(expenseData.date))
        setDescription(expenseData.description)
        setQuantity(expenseData.quantity)
      } else {
        navigate('/', { replace: true })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expense, user, navigate])

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value.replace(/[^0-9]/g, ''))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let quantityToAdd = parseFloat(quantity).toFixed(2)

    if (description === '' && quantity === '') {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por favor rellena todos los campos.'
      })

      return
    }

    if (!quantityToAdd) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'El valor que ingresaste no es correcto.'
      })

      return
    }

    const expenseData = {
      category,
      description,
      quantity: quantityToAdd,
      date: getUnixTime(date),
    }

    try {
      if (expense) {
        await updateExpense({
          id: expense.id,
          ...expenseData,
        })

        navigate('/', { replace: true })
      } else {
        await addExpense({
          ...expenseData,
          uidUser: user.uid,
        })

        setCategory('home')
        setDescription('')
        setQuantity('')
        setDate(new Date())

        setShowAlert(true)
        setAlert({
          type: 'success',
          message: 'Gasto agregado correctamente.'
        })
      }
    } catch (error) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Hubo un problema al intentar agregar/editar tu gasto.'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-[95%] md:w-1/2 mx-auto mt-8 bg-white dark:bg-gray-900 shadow-lg p-4 rounded-lg'>
      <section className='w-full flex flex-col gap-y-4 mb-4'>
        <CategoriesSelect />
        <DatePicker />
      </section>

      <div className='flex flex-col justify-center items-start gap-y-4'>
        <textarea
          type='text'
          name='description'
          placeholder='Descripción'
          autoComplete='off'
          value={description}
          onChange={handleChangeDescription}
          rows={3}
          className='w-full px-4 py-2 bg-gray-200 dark:bg-gray-950 dark:text-white rounded-md text-lg'
        />

        <input
          type='text'
          name='quantity'
          placeholder='$0.00'
          autoComplete='off'
          value={quantity}
          onChange={handleChangeQuantity}
          className='w-full px-4 py-2 bg-gray-200 dark:bg-gray-950 dark:text-white rounded-md text-lg'
        />
      </div>

      <section className='mt-4 flex justify-center'>
        <button
          type='submit'
          className='py-2 px-6 text-lg flex justify-center items-center gap-x-4 bg-green-500 text-white rounded-md font-bold hover:scale-105 hover:shadow-lg transition'
        >
          {expense ? 'Editar Gasto' : 'Agregar Gasto'} <PlusIcon />
        </button>
      </section>

      <Alert
        type={alert.type}
        message={alert.message}
      />
    </form>
  )
}

ExpensesForm.propTypes = {
  expense: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}
