import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AddExpense, EditExpense, ExpenseByCategory, Expenses, Home, SignIn, SignUp } from '../pages'
import PrivateRoute from './private-route'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/sign-in'
          element={<SignIn />}
        />
  
        <Route
          path='/sign-up'
          element={<SignUp />}
        />

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/categories'
          element={
            <PrivateRoute>
              <ExpenseByCategory />
            </PrivateRoute>
          }
        />

        <Route
          path='/add-expense'
          element={
            <PrivateRoute>
              <AddExpense />
            </PrivateRoute>
          }
        />

        <Route
          path='/edit/:id'
          element={
            <PrivateRoute>
              <EditExpense />
            </PrivateRoute>
          }
        />

        <Route
          path='/expenses'
          element={
            <PrivateRoute>
              <Expenses />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
