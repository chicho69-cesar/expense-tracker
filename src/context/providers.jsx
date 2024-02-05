import { PropTypes } from 'prop-types'

import { AuthProvider } from './auth'
import { ExpensesProvider } from './expenses'
import { UIProvider } from './ui'

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <ExpensesProvider>
        <UIProvider>
          {children}
        </UIProvider>
      </ExpensesProvider>
    </AuthProvider>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}
