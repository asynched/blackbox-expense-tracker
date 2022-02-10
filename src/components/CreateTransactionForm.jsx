import { useBoxForm } from 'blackbox.js'
import { appMutations, appForm } from '../stores'
import { preventDefault } from '../lib/ui'

export default function CreateTransactionForm() {
  const [form, register] = useBoxForm(appForm)

  const handleSubmit = () => {
    const transaction = { ...form, amount: +form.amount }
    appMutations.addTransactionItem(transaction)
  }

  return (
    <form onSubmit={preventDefault(handleSubmit)}>
      <p className="mb-2 text-lg">Add new transaction</p>
      <div className="mb-2">
        <p>Text</p>
        <input
          className="w-full py-1 px-2 border border-gray-300 outline-none"
          type="text"
          placeholder="Enter text"
          {...register('text')}
        />
      </div>
      <div className="mb-8">
        <p>Amount</p>
        <input
          className="w-full py-1 px-2 border border-gray-300 outline-none"
          type="number"
          placeholder="Enter amount"
          {...register('amount')}
        />
      </div>
      <button className="py-2 w-full text-white bg-purple-600 transition hover:bg-purple-500">
        Add transaction
      </button>
    </form>
  )
}
