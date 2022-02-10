import { useBox } from 'blackbox.js'
import { appBox } from './stores'
import { formatPrice } from './lib/formatters'

import ExpensesList from './components/ExpensesList'
import CreateTransactionForm from './components/CreateTransactionForm'

export default function App() {
  const box = useBox(appBox)

  const sum = (total, item) => total + item

  const getTotal = () => {
    return box.transactions.map((t) => t.amount).reduce(sum, 0)
  }

  const getIncome = () => {
    return box.transactions
      .filter((t) => t.amount > 0)
      .map((t) => t.amount)
      .reduce(sum, 0)
  }

  const getExpense = () => {
    return box.transactions
      .filter((t) => t.amount <= 0)
      .map((t) => t.amount)
      .reduce(sum, 0)
  }

  return (
    <div className="my-8 mx-auto w-[90%] max-w-lg text-gray-800">
      <h1 className="mb-8 text-4xl font-bold tracking-tighter">
        Expense tracker
      </h1>

      <div className="mb-8">
        <p className="uppercase">Your balance</p>
        <p className="text-3xl">{formatPrice(getTotal())}</p>
      </div>

      <div className="mb-8 p-4 w-full bg-white grid grid-cols-2 shadow-sm rounded-lg">
        <div className="text-center">
          <p className="font-medium">INCOME</p>
          <p className="text-2xl text-green-600">{formatPrice(getIncome())}</p>
        </div>
        <div className="text-center">
          <p className="font-medium">EXPENSE</p>
          <p className="text-2xl text-red-600">{formatPrice(getExpense())}</p>
        </div>
      </div>

      <ExpensesList />
      <CreateTransactionForm />
    </div>
  )
}
