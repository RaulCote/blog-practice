import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../../src/components/NavBar';
import { render } from '@testing-library/react';
import { renderLightTheme } from '../../utils/tests/themeContext';

const NavBarComponent = () => {
  const toggleMode = jest.fn();

  return <NavBar siteTitle="Default Starter" toggleMode={toggleMode} />;
};

describe('NavBar', () => {
  it('renders correctly', () => {
    const tree = renderLightTheme(<NavBarComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
