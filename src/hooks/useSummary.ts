import { useContext } from 'react'
import { TransactionsContext } from '../contexts/transactionalContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        const positiveValue =
          transaction.price < 0 ? -1 * transaction.price : transaction.price
        acc.outcome -= positiveValue
        acc.total -= positiveValue
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
