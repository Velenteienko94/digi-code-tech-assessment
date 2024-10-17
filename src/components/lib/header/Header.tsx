import cls from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={cls.headerContainer}>
      <select className={cls.languageSelect}>
        <option>En</option>
        <option>Deu</option>
      </select>
    </div>
  );
};
