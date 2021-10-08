import React from 'react'
import Navigation from '../navigation/Navigation';
import { HeaderStyled } from './HeaderStyled';
import  {mainRoutes} from '../../routes/mainRoutes' 

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation routes={mainRoutes}/>
    </HeaderStyled>
  );
}

export default Header;