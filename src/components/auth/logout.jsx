import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../firebase/config'

export default function Logout() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/sign-in')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      className='py-0.5 lg:py-1 px-2 lg:px-4 bg-red-500 text-base text-white rounded-full font-bold hover:bg-red-600 hover:shadow-lg hover:scale-105 transition block'
      onClick={handleLogout}
    >
      Cerrar sesión
    </button>
  )
}
