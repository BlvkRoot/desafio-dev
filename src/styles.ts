import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h1{
    color: #970;
    margin: 8px;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;
`;


export const Button = styled.button.attrs({
  type: 'submit',
})`
    background: none;
    border-radius: 6px;
    border: 2px solid #970;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 16px;
    padding: 4px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Head = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    // background-color: #00a;
    padding: 18px;
    
    h1{
        color: #970;
        margin: 8px;
    }
`;


export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      padding: 6px;
      margin-left: 10px;
      text-decoration: none;
      color: #dda;
      border: 1px solid #fff;
      border-radius: 3px
    }

    a:hover{
      background: #dda;
      color: #002;
      transition: 0.5s ease-in-out;
    }
`;