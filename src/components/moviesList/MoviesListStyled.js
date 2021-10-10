import styled from "styled-components";

export const MoviesListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  margin-left: -20px;
  margin-top: -20px;
  padding: 0;

  .moviesItem {
    flex-basis: calc(100% / 2 - 20px);
    margin-left: 20px;
    margin-top: 20px;

    opacity: 1;

    transition: opacity $transition-duration $transition-timing;

    &:hover,
    &:focus {
      opacity: 0.8;

      transition: all $transition-duration $transition-timing;
    }

    @media screen and (min-width: 768px) and (max-width: 1169px) {
      flex-basis: calc(100% / 3 - 20px);
    }

    @media screen and (min-width: 1170px) {
      flex-basis: calc(100% / 4 - 20px);
    }
  }

  .moviesImage {
    width: 250px;
  }

  .moviesLink {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
  }
  .moviesText {
    margin: 0;
    padding-top: 5px;
    background-color: transparent;
    text-align: center;
    font-style: italic;
    padding-top: 5px;
    font-size: 16px;
    font-weight: 500;
  }

  .moviesItem:hover .moviesText {
    color: aqua;
  }
`;
