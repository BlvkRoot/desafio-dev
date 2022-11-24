import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h1{
    color: #a00;
    margin: 8px;
  }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Button = styled.button`
    background: none;
    border-radius: 6px;
    border: 2px solid #a00;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 16px;
    width: 100%;
    padding: 4px;
    color: #fff;
`;