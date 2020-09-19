import React from 'react';
import PropTypes from 'prop-types';
import RippleButton from '../ui/RippleButton';

const ThemeToggler = ({ toggleMode, isDarkMode }) => {
  const toggleToolTip = isDarkMode
    ? 'Change to Light Theme'
    : 'Change to Dark Theme';

  return (
    <>
      <RippleButton onClick={toggleMode} testId={'ripple-button'}>
        {isDarkMode ? 'Light' : 'Dark'}
      </RippleButton>
    </>
  );
};

ThemeToggler.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default ThemeToggler;
