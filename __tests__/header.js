import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/header';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const Title = () => <h1 data-testid="hero-title">React Testing Library</h1>;

describe('React Test Library', () => {
  it('works as expected', () => {
    const { getByTestId } = render(<Title />);

    expect(getByTestId('hero-title')).toHaveTextContent(
      'React Testing Library'
    );
  });
});
