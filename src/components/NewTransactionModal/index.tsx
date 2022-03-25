import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
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
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" type="text" />
        <input placeholder="Valor" type="number" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={IncomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={OutcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" type="number" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
