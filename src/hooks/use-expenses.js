import { useEffect, useState } from 'react'
import { collection, limit, onSnapshot, orderBy, query, startAfter, where } from 'firebase/firestore'

import { db } from '../firebase/config'
import { useAuth } from '.'

export default function useExpenses() {
  const [expenses, setExpenses] = useState([])
  const [lastExpense, setLastExpense] = useState(null)
  const [thereIsMoreToLoad, setThereIsMoreToLoad] = useState(false)

  const { user } = useAuth()

  const getMoreExpenses = () => {
    const firebaseQuery = query(
      collection(db, 'expenses'),
      orderBy('date', 'desc'),
      where('uidUser', '==', user.uid),
      limit(10),
      startAfter(lastExpense)
    )

    onSnapshot(
      firebaseQuery,
      (snapshot) => {
        if (snapshot.docs.length > 0) {
          setLastExpense(snapshot.docs[snapshot.docs.length - 1])
          setExpenses(expenses.concat(snapshot.docs.map((document) => ({
            ...document.data(),
            id: document.id
          }))))
        } else {
          setThereIsMoreToLoad(false)
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(() => {
    const firebaseQuery = query(
      collection(db, 'expenses'),
      orderBy('date', 'desc'),
      where('uidUser', '==', user.uid),
      limit(10),
    )

    const unSubscribe = onSnapshot(
      firebaseQuery,
      (snapshot) => {
        const isMoreExpensesToLoad = snapshot.docs.length > 0

        if (isMoreExpensesToLoad) {
          setLastExpense(snapshot.docs[snapshot.docs.length - 1])
        }

        setThereIsMoreToLoad(isMoreExpensesToLoad)
        setExpenses(snapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        })))
      },
      (error) => {
        console.log(error)
      }
    )

    return unSubscribe
  }, [user])

  return {
    expenses,
    getMoreExpenses,
    thereIsMoreToLoad,
  }
}
