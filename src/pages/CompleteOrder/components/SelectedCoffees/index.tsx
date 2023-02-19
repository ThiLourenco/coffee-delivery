import { TitleText } from '../../../../components/Typograph'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer, WithoutCoffeeDivContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  const isCartEmpty = cartItems.length === 0;

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Meus Pedidos
      </TitleText>

      <DetailsContainer>
        {isCartEmpty ? (
          <WithoutCoffeeDivContainer>
            <p>nenhum café selecionado!</p>
          </WithoutCoffeeDivContainer> 
        ) : (
          cartItems.map((item) => {
          return <CoffeeCartCard key={item.id} coffee={item} />})
          )
        }
        <ConfirmationSection />
          
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
