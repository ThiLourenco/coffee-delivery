import { QuantityInputContainer, IconWrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  const isCoffeeSelected = quantity > 0
  const removeIsDisabled = !isCoffeeSelected

  return (
    <QuantityInputContainer size={size}>
      <IconWrapper
        disabled={quantity < 1 && removeIsDisabled}
        onClick={onDecrease}
        title="Remover"
      >
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease} title="Adicionar">
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
