import styled from 'styled-components';

const Container = styled.header`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #c22033;
  color: #fff;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = () => {
  return <Container>Whitty</Container>;
};
