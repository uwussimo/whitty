import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  input {
    width: 300px;
    height: 40px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    &:focus {
      outline: 1px solid #c22033;
    }
    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #fff inset;
      -webkit-text-fill-color: #000;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 40px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
  }
`;
