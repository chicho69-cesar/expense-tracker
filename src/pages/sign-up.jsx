import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, Link } from 'react-router-dom'

import Alert from '../components/ui/alert'
import AuthHeader from '../components/auth/header'
import { auth } from '../firebase/config.js'
import { validateEmail, validateUserErrors } from '../helpers/validations.js'
import { useUI } from '../hooks'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [alert, setAlert] = useState({})

  const navigate = useNavigate()
  const { setShowAlert } = useUI()

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleChangeRetypePassword = (event) => {
    setRetypePassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setShowAlert(false)
    setAlert({})

    if (!validateEmail(email)) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por ingresa un correo electrónico valido'
      })

      return
    }

    if (email === '' || password === '' || retypePassword === '') {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por ingresa todos los datos'
      })

      return
    }

    if (password !== retypePassword) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Las contraseñas no coinciden'
      })

      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: validateUserErrors(error)
      })

      return
    }
  }

  return (
    <>
      <Helmet>
        <title>Expense Tracker | Crear cuenta</title>
      </Helmet>

      <AuthHeader />

      <main className='w-full min-h-screen grid place-content-center'>
        <form onSubmit={handleSubmit} className='py-6 px-8 rounded shadow-xl flex flex-col flex-nowrap justify-center items-center gap-4 bg-white dark:bg-gray-900'>
          <h2 className='text-3xl text-balance font-bold dark:text-white'>
            Crear una cuenta nueva
          </h2>

          <div className='w-full flex flex-col gap-1 items-start'>
            <label htmlFor='email' className='font-bold text-fuchsia-600'>
              Email
            </label>

            <input
              type='email'
              name='email'
              id='email'
              placeholder='Correo electrónico'
              value={email}
              onChange={handleChangeEmail}
              className='min-w-64 md:min-w-96 w-full py-2 px-4 border border-fuchsia-500 dark:border-white bg-transparent dark:text-white rounded placeholder:text-fuchsia-700 dark:placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:ring-offset-fuchsia-500 dark:focus:ring-white dark:focus:ring-offset-white animate-border-width'
            />
          </div>

          <div className='w-full flex flex-col gap-1 items-start'>
            <label htmlFor='password' className='font-bold text-fuchsia-600'>
              Contraseña
            </label>

            <input
              type='password'
              name='password'
              id='password'
              placeholder='Contraseña'
              value={password}
              onChange={handleChangePassword}
              className='min-w-64 md:min-w-96 w-full py-2 px-4 border border-fuchsia-500 dark:border-white bg-transparent dark:text-white rounded placeholder:text-fuchsia-700 dark:placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:ring-offset-fuchsia-500 dark:focus:ring-white dark:focus:ring-offset-white animate-border-width'
            />
          </div>

          <div className='w-full flex flex-col gap-1 items-start'>
            <label htmlFor='retype-password' className='font-bold text-fuchsia-600'>
              Repite la contraseña
            </label>

            <input
              type='password'
              name='retype-password'
              id='retype-password'
              placeholder='Repite la contraseña'
              value={retypePassword}
              onChange={handleChangeRetypePassword}
              className='min-w-64 md:min-w-96 w-full py-2 px-4 border border-fuchsia-500 dark:border-white bg-transparent dark:text-white rounded placeholder:text-fuchsia-700 dark:placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:ring-offset-fuchsia-500 dark:focus:ring-white dark:focus:ring-offset-white animate-border-width'
            />
          </div>

          <Link to='/sign-in' className='w-full text-left dark:text-white'>
            ¿Ya tienes cuenta? <span className='text-fuchsia-600 font-semibold'>inicia sesión aquí</span>
          </Link>

          <button type='submit' className='py-2 px-6 bg-fuchsia-600 text-white text-lg font-bold rounded-lg hover:shadow-xl hover:scale-105 transition hover:bg-fuchsia-700'>
            Crear cuenta
          </button>
        </form>
      </main>

      <Alert
        type={alert.type}
        message={alert.message}
      />
    </>
  )
}
