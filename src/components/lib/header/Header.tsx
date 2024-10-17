import { LanguageSwitcher } from "..";
import cls from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={cls.headerContainer}>
      <LanguageSwitcher />
    </div>
  );
};
