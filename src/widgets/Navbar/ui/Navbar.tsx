import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onOpenModal}>
        {t('Enter')}
      </Button>
      <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
    </div>
  );
};
