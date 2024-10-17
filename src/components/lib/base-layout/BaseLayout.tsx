import cls from "./BaseLayout.module.scss";
import { Header } from "..";

export const BaseLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <body className={cls.layoutContainer}>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </body>
  );
};
