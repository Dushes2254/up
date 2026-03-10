import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('render', () => {
    render(<Input value="test" />);
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  test('render with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByText('Enter text>')).toBeInTheDocument();
  });

  test('onChange called', () => {
    const onChange = jest.fn();
    render(<Input value="" onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalledWith('new value');
  });

  test('autofocus', () => {
    render(<Input autofocus />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveFocus();
  });

  test('caret visible on focus', () => {
    const { container } = render(<Input autofocus />);
    expect(container.querySelector('.caret')).toBeInTheDocument();
  });

  test('caret hidden on blur', () => {
    const { container } = render(<Input />);
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    expect(container.querySelector('.caret')).toBeInTheDocument();
    fireEvent.blur(input);
    expect(container.querySelector('.caret')).not.toBeInTheDocument();
  });

  test('additional className', () => {
    const { container } = render(<Input className="custom" />);
    expect(container.firstChild).toHaveClass('inputWrapper');
    expect(container.firstChild).toHaveClass('custom');
  });
});
