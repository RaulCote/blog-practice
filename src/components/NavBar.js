import React from 'react';
import PropTypes from 'prop-types';
import { RippleButton } from '../ui/buttons';
import { ToggleThemeButton } from '../ui/themeToggleIcon';

const NavBar = ({ toggleMode, isDarkMode }) => {
  const toggleToolTip = isDarkMode
    ? 'Change to Light Theme'
    : 'Change to Dark Theme';

  // comment to test

  return (
    <>
      <ToggleThemeButton onClick={toggleMode} title={toggleToolTip} />
      <RippleButton
        onClick={toggleMode}
        width={'100px'}
        height={'30px'}
        data-testid={'ripple-button'}
      >
        Ripple
      </RippleButton>
    </>
  );
};

NavBar.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};

export default NavBar;
