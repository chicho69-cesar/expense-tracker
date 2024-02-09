import { Navigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { useAuth } from '../hooks'

export default function PrivateRoute({ children }) {
  const { user } = useAuth()

  if (user) {
    return children
  } else {
    return <Navigate to='/sign-in' replace />
  }
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}
