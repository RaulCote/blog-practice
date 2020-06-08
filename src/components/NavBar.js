import React from 'react';
import PropTypes from 'prop-types';
import { RippleButton } from '../ui/buttons';
import { ToggleThemeButton } from '../ui/themeToggleIcon';
import RippleMaterialButton from '../ui/ripple-button';

const NavBar = ({ toggleMode, isDarkMode }) => {
  const toggleToolTip = isDarkMode
    ? 'Change to Light Theme'
    : 'Change to Dark Theme';

  // comment to test

  return (
    <>
      <ToggleThemeButton onClick={toggleMode} title={toggleToolTip} />
      {/* <RippleButton */}
      {/*   onClick={toggleMode} */}
      {/*   width={'100px'} */}
      {/*   height={'30px'} */}
      {/*   data-testid={'ripple-button'} */}
      {/* > */}
      {/*   Ripple */}
      {/* </RippleButton> */}

      <RippleMaterialButton
        onClick={toggleMode}
        // height={'30px'}
        testId={'ripple-button'}
      >
        Ripple Material
      </RippleMaterialButton>
    </>
  );
};

NavBar.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};

export default NavBar;
