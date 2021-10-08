import styled from 'styled-components';

export const CastStyled = styled.ul `
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  border-top: 2px solid aqua;

  .item {
    width: 200px;
    padding: 10px;  
    text-align: center;
  }
  .image {
    width: 100%;
  }

  .nameText {
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
  }
`