import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0.5rem 0.531rem;
  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }
  @media(max-width: 400px) {

    ${({ size }) => size === 'medium' &&
      css`
       padding: 0.1rem
  
      `}
  
      ${({ size }) => size === 'small' &&
      css`
       padding: 0.1rem 0.1rem;
    `}
  }
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 1.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: 0.4s;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }

  @media (max-width: 400px){   
    font-size: 80.5%
  }
`;
