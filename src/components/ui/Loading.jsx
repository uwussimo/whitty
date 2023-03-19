import styled from 'styled-components';

const Loading = styled.div`
  border: 4px solid #f4f4f4;
  border-top: 4px #c22033 solid;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Loading };
