import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import MainLayout from '../components/layouts/main-layout'
import { useAuth } from '../hooks'

export default function Home() {
  const { user } = useAuth()

  return (
    <MainLayout>
      <Helmet>
        <title>Expense Tracker | Inicio</title>
      </Helmet>

      <main className='w-[95%] md:w-4/5 mx-auto my-8 flex flex-col justify-start gap-y-10'>
        <article className='w-full flex flex-col lg:flex-row justify-between items-center gap-x-4 my-16'>
          <section className='w-full lg:w-1/3'>
            <h2 className='text-2xl text-center font-bold text-balance dark:text-white'>
              Administra tus gastos con <span>Expense Tracker</span>
            </h2>

            <p className='text-base text-pretty mb-4 dark:text-white text-center'>
              Utilizando Expense Tracker, puedes administrar tus gastos de forma sencilla y fácil.
            </p>

            <div className='flex justify-center'>
              {user ? (
                <Link to='/expenses' className='text-lg text-indigo-600 font-bold text-center'>
                  Navega para ver tus gastos
                </Link>
              ) : (
                <Link to='/sign-in' className='text-lg text-indigo-600 font-bold text-center'>
                  Inicia sesión para ver y administrar tus gastos.
                </Link>
              )}
            </div>
          </section>

          <picture className='w-[90%] mx-auto lg:w-2/3 mt-12 lg:mt-0'>
            <img
              src='/images/img-1.webp'
              alt='Imagen numero 1'
              className='w-full rotate-6 shadow-lg rounded'
            />
          </picture>
        </article>

        <article className='w-full flex flex-col lg:flex-row justify-between items-center gap-x-4 my-16'>
          <picture className='w-[90%] mx-auto lg:w-2/3 mb-12 lg:mb-0'>
            <img
              src='/images/img-2.webp'
              alt='Imagen numero 1'
              className='w-full -rotate-3 shadow-lg rounded'
            />
          </picture>

          <section className='w-full lg:w-1/3'>
            <h2 className='text-2xl text-center font-bold text-balance dark:text-white mb-4'>
              Agrega nuevos gastos a tu seguimiento personalizado!
            </h2>

            <div className='flex justify-center'>
              {user ? (
                <Link to='/add-expense' className='text-lg text-indigo-600 font-bold text-center'>
                  Agrega un nuevo gasto a la lista
                </Link>
              ) : (
                <Link to='/sign-in' className='text-lg text-indigo-600 font-bold text-center'>
                  Crea una cuenta nueva para administrar tus gastos.
                </Link>
              )}
            </div>
          </section>
        </article>

        <article className='w-full flex flex-col lg:flex-row justify-between items-center gap-x-4 my-16'>
          <section className='w-full lg:w-1/3'>
            <h2 className='text-2xl text-center font-bold text-balance dark:text-white'>
              Ve las estadísticas de tus gastos agrupados por categorías.
            </h2>

            <p className='text-base text-pretty mb-4 dark:text-white text-center'>
              Con Expense Tracker, puedes ver las estadísticas de tus gastos agrupados por categorías y por fecha.
            </p>
          </section>

          <picture className='w-[90%] mx-auto lg:w-2/3 mt-12 lg:mt-0'>
            <img
              src='/images/img-3.webp'
              alt='Imagen numero 1'
              className='w-full rotate-6 shadow-lg rounded'
            />
          </picture>
        </article>
      </main>
    </MainLayout>
  )
}
