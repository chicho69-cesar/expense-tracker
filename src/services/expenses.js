import {
  addExpense as addExpenseFirebase,
  deleteExpense as deleteExpenseFirebase,
  updateExpense as updateExpenseFirebase
} from '../firebase/expenses'

export async function addExpense({ category, description, quantity, date, uidUser }) {
  return await addExpenseFirebase({
    category,
    date,
    description,
    quantity,
    uidUser
  })
}

export async function updateExpense({ id, category, description, quantity, date }) {
  return await updateExpenseFirebase({
    id,
    category,
    description,
    quantity,
    date
  })
}

export async function deleteExpense({ id }) {
  await deleteExpenseFirebase({ id })
}
