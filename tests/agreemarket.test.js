import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/landing/agree-market';

describe('Agree Market', () => {
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
    expect(screen.getByTestId('landing-thirteen')).toBeInTheDocument();
    expect(screen.getByTestId('landing-fourteen')).toBeInTheDocument();
    expect(screen.getByTestId('landing-eighteen')).toBeInTheDocument();
    expect(screen.getByTestId('landing-seventeen')).toBeInTheDocument();
  });
});
