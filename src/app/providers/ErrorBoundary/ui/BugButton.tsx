import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// TODO: Удалить после тестирования
// Кнопка для тестирования ErrorBoundary
export const BugButton: FC = () => {
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow}>{t('ThrowError')}</Button>
  );
};
