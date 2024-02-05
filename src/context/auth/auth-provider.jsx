import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { PropTypes } from 'prop-types'

import { auth } from '../../firebase/config'
import { AuthContext } from '.'

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cancelSubscription = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return cancelSubscription
  }, [])

  return (
    <AuthContext.Provider
      value={{
        // Properties
        user
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
