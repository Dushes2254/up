import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('should return initial state', () => {
    expect(counterReducer(undefined, { type: undefined })).toEqual({ value: 0 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
  });

  test('should increment value', () => {
    const state: CounterSchema = { value: 0 };
    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 1 });
  });

  test('should decrement value', () => {
    const state: CounterSchema = { value: 0 };
    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: -1 });
  });
});
