import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }

  @media (max-width: 400px){
    > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 3.7rem;
      height: 3.7rem;
    }
  }
    > p {
      align-self: flex-start;
      font-weight: 700;
    }

    display: flex;
    align-items: flex-end;
    justify-items: flex-end;

    gap: 0.75;
    font-size: 80.5%

  }
`;

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }

  @media (max-width: 462px){
    gap: 0.5rem;

    > div {
    max-width: 4.5rem;
    height: 100%;
    }

    height: 2rem;
    font-size: 80.5%
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.colors["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;
  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  @media (max-width: 400px){   
    gap: 0.5rem;
    font-size: 80.5%

  }
`;
