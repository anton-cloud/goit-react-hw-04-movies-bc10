import React from "react";
import { ButtonGoBackStyled } from "./ButtonGoBackStyled";


const ButtonGoBack = ({ location, history, DataFromHistoryState }) => {
  const goBack = () => {
    if (DataFromHistoryState.search === true) {
      history.push({
        pathname: location?.state?.from ? location.state.from : "/",
      });
      return
    } 
    history.push({
      pathname: DataFromHistoryState.from,
      search: `?query=${DataFromHistoryState.search}`,
    });
  };

  return (
    <ButtonGoBackStyled type="button" onClick={goBack}>
      Go Back
    </ButtonGoBackStyled>
  );
};

export default ButtonGoBack;


