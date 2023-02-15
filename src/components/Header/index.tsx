import { HeaderContainer } from './styles'
import logoCoffee from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <a href="">
        <img src={logoCoffee} alt="" /> 
      </a>
      <div>
        <div>
          
          <span>Rio de Janeiro - BR</span>
        </div>
      </div>
    </HeaderContainer>

  )
}