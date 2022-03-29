import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api"

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
  createTransaction: (transaction: ITransactionInput) => Promise<void>
}

const TransactionContext = createContext<ITransactionsContextData>({} as ITransactionsContextData)

export function TransactionProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: ITransactionInput): Promise<void> {
    const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionContext)
  return context
}
