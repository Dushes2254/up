import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  test('render', () => {
    componentRender(<LoginForm />);
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('has two inputs', () => {
    const { container } = componentRender(<LoginForm />);
    const allInputs = container.querySelectorAll('input');
    expect(allInputs).toHaveLength(2);
  });

  test('submit button present', () => {
    componentRender(<LoginForm />);
    const button = screen.getByText('Login');
    expect(button).toBeInTheDocument();
    expect(button.closest('button')).toHaveAttribute('type', 'submit');
  });

  test('additional className', () => {
    const { container } = componentRender(<LoginForm className="custom" />);
    expect(container.firstChild).toHaveClass('loginForm');
    expect(container.firstChild).toHaveClass('custom');
  });

  test('username input has autofocus', () => {
    componentRender(<LoginForm />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveFocus();
  });
});
