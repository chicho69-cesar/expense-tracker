import { Link } from 'react-router-dom'
import { useAuth, useUI } from '../../hooks'
import Logout from '../auth/logout'

export default function Header() {
  const { user } = useAuth()
  const { isDark, setDarkTheme } = useUI()

  return (
    <header className='w-[95%] md:w-4/5 mx-auto py-6 mt-6 flex flex-col lg:flex-row justify-between items-center gap-y-4 gap-x-2 lg:gap-x-4'>
      <section>
        <Link to='/'>
          <h1 className='text-4xl text-gray-900 dark:text-white font-black'>
            Expense <span className='text-green-500'>Tracker</span>
          </h1>
        </Link>
      </section>

      <nav>
        <ul className='flex justify-center items-center gap-x-2 lg:gap-x-4'>
          <li>
            <Link to='/' className='py-0.5 px-2 rounded font-medium text-gray-700 dark:text-gray-50 text-base lg:text-lg hover:text-gray-950 hover:bg-gray-300 dark:hover:text-black dark:hover:bg-white transition'>
              Inicio
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to='/expenses' className='py-0.5 px-2 rounded font-medium text-gray-700 dark:text-gray-50 text-base lg:text-lg hover:text-gray-950 hover:bg-gray-300 dark:hover:text-black dark:hover:bg-white transition'>
                  Gastos
                </Link>
              </li>

              <li>
                <Link to='/categories' className='py-0.5 px-2 rounded font-medium text-gray-700 dark:text-gray-50 text-base lg:text-lg hover:text-gray-950 hover:bg-gray-300 dark:hover:text-black dark:hover:bg-white transition'>
                  Tus categorías
                </Link>
              </li>

              <Logout />
            </>
          ) : (
            <>
              <li>
                <Link to='/sign-up' className='py-0.5 lg:py-1 px-3 lg:px-6 bg-black text-white rounded-full font-bold hover:bg-gray-950 hover:shadow-lg hover:scale-105 dark:bg-white dark:text-black transition block'>
                  Crear cuenta
                </Link>
              </li>

              <li>
                <Link to='/sign-in' className='py-0.5 lg:py-1 px-3 lg:px-6 bg-black text-white rounded-full font-bold hover:bg-gray-950 hover:shadow-lg hover:scale-105 dark:bg-white dark:text-black transition block'>
                  Iniciar Sesión
                </Link>
              </li>
            </>
          )}

          <button className='text-gray-900 dark:text-white' onClick={() => setDarkTheme()}>
            {isDark ? (
              <svg className='size-9 ml-2 hover:scale-110 transition' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
                <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
              </svg>
            ) : (
              <svg className='size-9 ml-2 hover:scale-110 transition' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
              </svg>
            )}
          </button>
        </ul>
      </nav>
    </header>
  )
}
