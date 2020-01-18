import React from 'react';
import PropTypes from 'prop-types';
import { RippleButton } from '../ui/buttons';
import { ToggleThemeButton } from '../ui/themeToggleIcon';

const NavBar = ({ toggleMode, isDarkMode }) => {

  const toggleToolTip = isDarkMode 
    ? 'Change to Light Theme' 
    : 'Change to Dark Theme';

  return (
  <>
    <ToggleThemeButton 
      onClick={toggleMode} 
      title={toggleToolTip} 
    />
    <RippleButton 
      onClick={toggleMode} 
      width={'100px'} 
      height={'30px'}
    >
        Ripple
    </RippleButton>
  </>
  )
};

NavBar.propTypes = {
  toggleMode: PropTypes.func.isRequired
};

export default NavBar;
