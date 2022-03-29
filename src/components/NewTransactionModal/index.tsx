import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {

  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({
      title,
      amount,
      category,
      type
    });

    setType('')
    setTitle('')
    setAmount(0)
    setCategory('')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" type="text" value={title} onChange={event => setTitle(event.target.value)}/>
        <input placeholder="Valor" type="number" value={amount} onChange={event => setAmount(Number(event.target.value))}/>
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={IncomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={OutcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" type="text" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
