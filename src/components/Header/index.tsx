import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt=""/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}

export default Header
