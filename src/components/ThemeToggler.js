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
        {typeof window !== 'undefined' ? toggleText : null}
      </RippleButton>
    </>
  );
};

ThemeToggler.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};

export default ThemeToggler;
