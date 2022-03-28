import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api"

interface ITransaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionsProviderProps {
  children: ReactNode
}

interface ITransactionsContextData {
  transactions: ITransaction[]
  createTransaction: (transaction: ITransactionInput) => void
}

export const TransactionContext = createContext<ITransactionsContextData>({} as ITransactionsContextData)

export function TransactionProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: ITransactionInput): void {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
