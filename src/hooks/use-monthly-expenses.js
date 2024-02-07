import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { endOfMonth, getUnixTime, startOfMonth } from 'date-fns'

import { db } from '../firebase/config'
import { useAuth } from '.'

export default function useMonthlyExpenses() {
  const [expenses, setExpenses] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    const startOfTheMonth = getUnixTime(startOfMonth(new Date()))
    const endOfTheMonth = getUnixTime(endOfMonth(new Date()))

    if (user) {
      const firebaseQuery = query(
        collection(db, 'expenses'),
        orderBy('date', 'desc'),
        where('date', '>=', startOfTheMonth),
        where('date', '<=', endOfTheMonth),
        where('uidUser', '==', user.uid)
      )

      const unSuscribe = onSnapshot(
        firebaseQuery,
        (snapshot) => {
          setExpenses(snapshot.docs.map((document) => ({
            ...document.data(),
            id: document.id,
          })))
        },
        (error) => {
          console.log(error)
        }
      )

      return unSuscribe
    }
  }, [user])

  return {
    expenses,
  }
}
