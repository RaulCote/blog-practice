import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RippleButton from '../ui/RippleButton';
import { ThemeContext } from 'styled-components';
import darkTheme from '../themes/dark';

const ThemeToggler = ({ toggleMode }) => {
  const theme = useContext(ThemeContext);

  const toggleText = theme === darkTheme ? 'Light' : 'Dark';

  return (
    <>
      <RippleButton onClick={toggleMode} testId={'ripple-button'}>
        {window.__loaded ? toggleText : null}
      </RippleButton>
    </>
  );
};

ThemeToggler.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default ThemeToggler;
