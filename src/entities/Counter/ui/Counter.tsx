import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import cls from './Counter.module.scss';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={cls.counter}>
      <Button data-testid="increment-btn" type="button" onClick={increment}>
        {t('Increment')}
      </Button>
      <Button data-testid="decrement-btn" type="button" onClick={decrement}>
        {t('Decrement')}
      </Button>
      <h2 data-testid="value-title">{value}</h2>
    </div>
  );
};
