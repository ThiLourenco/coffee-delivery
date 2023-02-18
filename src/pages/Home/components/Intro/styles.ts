import { rgba } from 'polished';
import styled from 'styled-components';
import introBackgroundImg from '../../../../assets/intro-background.png';
import { TitleText } from '../../../../components/Typograph';

export const IntroContainer = styled.section`
  width: 100%;
  height: 35rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.1)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;

    img {
      display: none;
    }
  }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.35rem;
  margin-top: 4.125rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
