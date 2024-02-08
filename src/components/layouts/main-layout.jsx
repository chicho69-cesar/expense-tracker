import { PropTypes } from 'prop-types'
import Header from '../structure/header'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      
      <main>
        {children}
      </main>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
