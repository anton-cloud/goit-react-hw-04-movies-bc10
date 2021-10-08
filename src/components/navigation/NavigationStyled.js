import styled from "styled-components";

export const NavigationStyled = styled.nav`
  display: flex;
  padding: 20px;

  .NavList {
    margin: 0;
    padding: 0;
  }

  .NavLink {
    text-decoration: none;
    font-size: 20px;
    margin-left: 10px;
    font-weight: 700;
    color: #000;
  }

  .activeNavLink {
    color: aqua;
  }
`;
