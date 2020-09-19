import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RippleButton from '../ui/RippleButton';
import { ThemeContext } from 'styled-components';
import darkTheme from '../themes/dark';

const ThemeToggler = ({ toggleMode, mounted }) => {
  const theme = useContext(ThemeContext);

  console.log('mounted :::::::::::::: theme toggler :::: ', mounted);
  const toggleText =
    (typeof window !== undefined &&
      typeof window !== 'undefined' &&
      document.body.classList[0] === 'dark') ||
    theme === darkTheme
      ? 'Light'
      : 'Dark';

  return (
    <>
      <RippleButton onClick={toggleMode} testId={'ripple-button'}>
        {toggleText}
      </RippleButton>
    </>
  );
};

ThemeToggler.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default ThemeToggler;
