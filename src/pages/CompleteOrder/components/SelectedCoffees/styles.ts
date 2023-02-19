import styled from 'styled-components';
import { SectionBaseStyle } from '../CompleteOrderForm/styles';

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  width: 42rem;
  gap: 0.95;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  margin-top: 11px;
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const WithoutCoffeeDivContainer = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.3rem;
    padding: 10.3rem 0;
  }

  img {
    width: 75%;
  }

`