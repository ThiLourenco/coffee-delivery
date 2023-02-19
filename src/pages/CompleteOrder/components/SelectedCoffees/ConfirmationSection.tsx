import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typograph'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5
const priceDefault = 0.00

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const isCartEmpty = cartQuantity <= 0
  const totalPriceDefault =  formatMoney(priceDefault)

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal} </RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
        R$ {isCartEmpty ? totalPriceDefault : formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="Confirmar pedido"
        disabled={isCartEmpty}
        type="submit"
        title={
          isCartEmpty 
          ? 'Selecione um café para confirmar o seu pedido'
          : 'Complete o seu pedido!'
        }
      />
    </ConfirmationSectionContainer>
  )
}
