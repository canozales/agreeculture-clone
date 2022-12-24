import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from '../pages/dtp/login';

describe('Login Pages', () => {
  it('All Components Rendered Successfully', () => {
    render(<Login />);
    expect(screen.getByTestId('login-one')).toBeInTheDocument();
    expect(screen.getByTestId('login-two')).toBeInTheDocument();
    expect(screen.getByTestId('login-three')).toBeInTheDocument();
    expect(screen.getByTestId('login-four')).toBeInTheDocument();
    expect(screen.getByTestId('login-five')).toBeInTheDocument();
  });
});
