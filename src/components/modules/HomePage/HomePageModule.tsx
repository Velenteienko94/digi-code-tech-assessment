import { useGetPagesList } from "@/hooks";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import cls from "./HomePageModule.module.scss";

export const HomePageModule = () => {
  const t = useTranslations("HomePage");
  const { pages } = useGetPagesList();
  const localActive = useLocale();

  return (
    <div className={cls.homePageContainer}>
      <h1>{t("title")}</h1>
      <h3>{t("about")}</h3>
      <ul>
        {pages.map((page) => {
          return (
            <li key={page?.key}>
              <Link href={`${localActive}/${page?.url}`}>{page?.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
