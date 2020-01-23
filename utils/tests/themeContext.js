import React from 'react';
import renderer from 'react-test-renderer';
import lightTheme from '../../src/themes/light';
import darkTheme from '../../src/themes/dark';
import { ThemeProvider } from 'styled-components';

export function renderLightTheme(component) {
  return renderer.create(
    <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>
  );
}

export function renderDarkTheme(component) {
  return renderer.create(
    <ThemeProvider theme={darkTheme}>{component}</ThemeProvider>
  );
}
