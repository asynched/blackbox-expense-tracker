import { useBox } from 'blackbox.js'

import { formatPrice } from '../lib/formatters'
import { appBox, appMutations } from '../stores'

export default function ExpensesList() {
  const box = useBox(appBox)

  return (
    <div className="mb-8">
      <p className="mb-4 text-lg">History</p>
      <ul className="flex flex-col gap-2">
        {box.transactions.map((transaction) => (
          <li
            className={`py-2 px-4 flex justify-between bg-white shadow-sm border-r-4 cursor-pointer ${
              transaction.amount >= 0 ? 'border-green-600' : 'border-red-600'
            }`}
            key={transaction.id}
            onClick={() => appMutations.removeTransactionItem(transaction.id)}
          >
            <p>{transaction.text}</p>
            <p>{formatPrice(transaction.amount)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
