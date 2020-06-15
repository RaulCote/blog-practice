import React from 'react';
import PropTypes from 'prop-types';
import { ToggleThemeButton } from '../ui/themeToggleIcon';
import RippleButton from '../ui/ripple-button';

const NavBar = ({ toggleMode, isDarkMode }) => {
  const toggleToolTip = isDarkMode
    ? 'Change to Light Theme'
    : 'Change to Dark Theme';

  // comment to test

  return (
    <>
      <ToggleThemeButton onClick={toggleMode} title={toggleToolTip} />

      <RippleButton onClick={toggleMode} testId={'ripple-button'}>
        Ripple Material
      </RippleButton>
    </>
  );
};

NavBar.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};

export default NavBar;
