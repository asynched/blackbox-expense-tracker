import createBox from 'blackbox.js'

export const appForm = createBox({
  text: '',
  amount: '',
})

export const appBox = createBox({
  transactions: [
    {
      id: crypto.randomUUID(),
      text: 'Cash',
      amount: 500,
    },
  ],
})

export const appMutations = {
  addTransactionItem(item) {
    appBox.set((state) => {
      item.id = crypto.randomUUID()
      state.transactions.push(item)
      return state
    })
  },
  removeTransactionItem(id) {
    appBox.set((state) => {
      state.transactions = state.transactions.filter((item) => item.id !== id)
      return state
    })
  },
}
