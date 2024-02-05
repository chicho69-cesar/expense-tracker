import { useUI } from '../../hooks'

export default function Header() {
  const { isDark, setDarkTheme } = useUI()

  return (
    <header className='absolute py-6 px-10 flex justify-end w-full'>
      <button className='text-gray-900 dark:text-white' onClick={() => setDarkTheme()}>
        {isDark ? (
          <svg className='size-10' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
            <path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
            <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
          </svg>
        ) : (
          <svg className='size-10' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'/>
            <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
          </svg>
        )}
      </button>
    </header>
  )
}
