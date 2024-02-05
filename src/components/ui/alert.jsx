import styles from './alert.module.css'

import { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import clsx from 'clsx'
import { useUI } from '../../hooks'

export default function Alert({ type, message }) {
  const { showAlert, setShowAlert } = useUI()

  useEffect(() => {
    let time

    if (showAlert) {
      time = setTimeout(() => {
        setShowAlert(false)
      }, 4000)
    }

    return () => {
      clearTimeout(time)
    }
  }, [showAlert, setShowAlert])

  return (
    <div>
      {showAlert && (
        <div
          className={`fixed left-0 top-5 w-full flex justify-center items-center ${styles.alert}`}
        >
          <p className={clsx(
            'py-5 px-10 rounded text-white text-center shadow-md font-bold',
            type === 'error' && 'bg-red-500',
            type === 'success' && 'bg-green-500',
            type !== 'error' && type !== 'success' && 'bg-gray-900'
          )}>
            {message}
          </p>
        </div>
      )}
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
}
