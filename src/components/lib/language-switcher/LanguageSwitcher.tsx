"use client";

import { ELanguageKeys, ELanguageLabels } from "@/constants/contsnts";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

import cls from "./LanguageSwitcher.module.scss";

export const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className={cls.switcherContainer}>
      <p className={cls.switcherLabel}>Change language</p>
      <select
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value={ELanguageKeys.EN}>
          {ELanguageLabels[ELanguageKeys.EN]}
        </option>
        <option value={ELanguageKeys.DEU}>
          {ELanguageLabels[ELanguageKeys.DEU]}
        </option>
      </select>
    </div>
  );
};
