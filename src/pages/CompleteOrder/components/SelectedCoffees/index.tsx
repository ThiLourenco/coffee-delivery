import { TitleText } from "../../../../components/Typograph";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./CorfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    const { cartItems } = useCart();

    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>

            <DetailsContainer>
                {cartItems.map(item => {
                    return <CoffeeCartCard key={item.id} coffee={item}/>
                })}
                <ConfirmationSection />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}
