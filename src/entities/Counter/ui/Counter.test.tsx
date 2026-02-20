import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('0');
  });

  test('should increment value', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
    const incrementBtn = screen.getByTestId('increment-btn');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('1');
  });
});
