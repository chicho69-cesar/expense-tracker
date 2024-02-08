import { useUI } from '../../hooks'

export default function Background() {
  const { isDark } = useUI()
  const { pathname } = window.location

  return (
    <>
      {/* <div
        className='absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-gray-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'
      /> */}

      {isDark ? (
        <div className='fixed inset-0 -z-10 h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
          <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]'></div>
        </div>
      ) : (
        <div className='fixed inset-0 -z-10 h-full w-full bg-gray-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
          <div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]'></div>
        </div>
      )}

      {pathname === '/sign-in' || pathname === '/sign-up' && (
        <div className='absolute left-4 bottom-4 -z-10 animate-bounce'>
          <img
            src='/favicon.png'
            alt='Favicon'
            className='size-12'
          />
        </div>
      )}
    </>
  )
}
