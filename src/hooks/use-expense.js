import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'

import { db } from '../firebase/config'

export default function useExpenseById({ id }) {
  const [expense, setExpense] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getExpense = async () => {
      const document = await getDoc(doc(db, 'expenses', id))

      if (document.exists) {
        setExpense(document)
      } else {
        navigate('/list')
      }
    }

    getExpense()
  }, [navigate, id, setExpense])

  return {
    expense,
  }
}
