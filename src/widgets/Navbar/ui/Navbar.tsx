import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.MAIN]}>
          {t('MainPage')}
        </AppLink>
        <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.ABOUT]}>
          {t('AboutPage')}
        </AppLink>
      </div>
    </div>
  );
};
