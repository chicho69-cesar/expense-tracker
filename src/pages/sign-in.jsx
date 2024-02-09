import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, Link } from 'react-router-dom'

import Alert from '../components/ui/alert.jsx'
import AuthHeader from '../components/auth/header.jsx'
import { auth } from '../firebase/config.js'
import { validateEmail, validateUserErrors } from '../helpers/validations.js'
import { useUI } from '../hooks/index.js'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState({})

  const navigate = useNavigate()
  const { setShowAlert } = useUI()

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setShowAlert(false)
    setAlert({})

    if (!validateEmail(email)) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por favor ingresa un correo electrónico valido'
      })

      return
    }

    if (email === '' || password === '') {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por favor ingresa todos los campos'
      })

      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
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
        <title>Expense Tracker | Iniciar Sesión</title>
      </Helmet>

      <AuthHeader />

      <main className='w-full min-h-screen grid place-content-center'>
        <form onSubmit={handleSubmit} className='py-6 px-8 rounded shadow-xl flex flex-col flex-nowrap justify-center items-center gap-4 bg-white dark:bg-gray-900'>
          <h2 className='text-3xl text-balance font-bold dark:text-white'>
            Inicia sesión con tu cuenta
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

          <Link to='/sign-up' className='w-full text-left dark:text-white'>
            ¿Aún no tienes cuenta? <span className='text-fuchsia-600 font-semibold'>regístrate aquí</span>
          </Link>

          <button type='submit' className='py-2 px-6 bg-fuchsia-600 text-white text-lg font-bold rounded-lg hover:shadow-xl hover:scale-105 transition hover:bg-fuchsia-700'>
            Iniciar Sesión
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
