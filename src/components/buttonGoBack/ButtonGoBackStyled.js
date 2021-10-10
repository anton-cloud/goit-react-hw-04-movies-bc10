import styled from 'styled-components';

export const ButtonGoBackStyled = styled.button `

  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  background-color: #e0e4e4;

  transition: all $transition-duration $transition-timing;
  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: aqua;

    transition: all $transition-duration $transition-timing;

}
`