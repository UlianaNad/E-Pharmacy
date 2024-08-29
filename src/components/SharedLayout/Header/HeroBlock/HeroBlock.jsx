import styled from 'styled-components';

const HeroBlock = () => {
  return (
    <HeroTextBlock>
    <h1>Your medication delivered</h1>
    <p>Say goodbye to all your healthcare worries with us</p>
  </HeroTextBlock>
  )
}

export const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 610px;
  margin: 0 auto;
  margin-top: 145px;
  h1 {
    font-size: 74px;
    font-weight: 600;
  }
  p {
    padding-right: 50px;
    margin-top: 24px;
    align-self: flex-end;
    width: 210px;
    font-size: 16px;
    line-height: 1.2;
  }
`;
export default HeroBlock