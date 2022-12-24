import '@testing-library/jest-dom';
import Home from '../pages/index';
import { render, screen } from '@testing-library/react';

describe('Main Page', () => {
  it('Navigation Bar Rendered Successfully', () => {
    render(<Home />);
    expect(screen.getByTestId('navbar-one')).toBeInTheDocument();
  });

  it('Footer Rendered Successfully', () => {
    render(<Home />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('All Components Rendered Successfully', () => {
    render(<Home />);
    expect(screen.getByTestId('landing-one')).toBeInTheDocument();
    expect(screen.getByTestId('landing-two')).toBeInTheDocument();
    expect(screen.getByTestId('landing-three')).toBeInTheDocument();
    expect(screen.getByTestId('landing-four')).toBeInTheDocument();
    expect(screen.getByTestId('landing-five')).toBeInTheDocument();
    expect(screen.getByTestId('landing-seven')).toBeInTheDocument();
    expect(screen.getByTestId('landing-six')).toBeInTheDocument();
  });
});
