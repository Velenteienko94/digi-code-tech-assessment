import Link from "next/link";
import { LanguageSwitcher } from "..";
import cls from "./Header.module.scss";
import { useLocale } from "next-intl";

export const Header = () => {
  const localActive = useLocale();

  return (
    <div className={cls.headerContainer}>
      <Link className={cls.linkStyle} href={`/${localActive}`}>
        Back to home
      </Link>
      <LanguageSwitcher />
    </div>
  );
};
