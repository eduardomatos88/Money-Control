import { shade } from 'polished'
import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
  toggleTheme: () => void
}

function Header({ onOpenNewTransactionModal, toggleTheme }: IHeaderProps) {

  const { title, colors } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <img src={logo} alt=""/>
        <div>
          <Switch
            checked={title === 'dark'}
            onChange={toggleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={shade(0.3, colors.primary)}
            onColor={colors.secondary}
          />
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        </div>
      </Content>
    </Container>
  )
}

export default Header
