import { collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'

import { db } from './config'
import { EXPENSES } from '../constants/collections'

export async function addExpense({ category, description, quantity, date, uidUser }) {
  return addDoc(collection(db, EXPENSES), {
    category,
    description,
    quantity: Number(quantity),
    date,
    uidUser
  })
}

export async function updateExpense({ id, category, description, quantity, date }) {
  const document = doc(db, EXPENSES, id)

  return await updateDoc(document, {
    category,
    description,
    quantity: Number(quantity),
    date
  })
}

export async function deleteExpense({ id }) {
  await deleteDoc(doc(db, EXPENSES, id))
}
