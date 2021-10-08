import React from "react";

const ButtonGoBack = ({ location, history, DataFromHistoryState }) => {
  const goBack = () => {
    if (!DataFromHistoryState.search) {
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
    <button type="button" onClick={goBack}>
      Go Back
    </button>
  );
};

export default ButtonGoBack;


