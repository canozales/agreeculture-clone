import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Register from '../pages/dtp/register';

describe('Login Pages', () => {
  it('All Components Rendered Successfully', () => {
    render(<Register />);
    expect(screen.getByTestId('register-one')).toBeInTheDocument();
    expect(screen.getByTestId('register-two')).toBeInTheDocument();
    expect(screen.getByTestId('register-three')).toBeInTheDocument();
    expect(screen.getByTestId('register-four')).toBeInTheDocument();
    expect(screen.getByTestId('register-five')).toBeInTheDocument();
    expect(screen.getByTestId('register-six')).toBeInTheDocument();
    expect(screen.getByTestId('register-seven')).toBeInTheDocument();
  });
});
