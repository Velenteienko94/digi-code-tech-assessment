import { useTranslations } from "next-intl";

import cls from "./BreedsPageModule.module.scss";
import { useGetBreeds } from "@/hooks/useGetBreeds";
import { BreedCard } from "@/components/lib/breed-card/BreedCard";

export const BreedsPageModule = () => {
  const t = useTranslations("BreedsPage");
  const breedsList = useGetBreeds();
  if (!breedsList) {
    return <div>Sorry, something goes wrong, no data</div>;
  }
  return (
    <div className={cls.breedsPageConteiner}>
      <h1>{t("title")}</h1>
      <h3>{t("about")}</h3>
      <div className={cls.breedsContainer}>
        {breedsList?.breeds?.data?.map((breed) => (
          <BreedCard
            key={breed?.id}
            id={breed?.id}
            name={breed?.attributes?.name}
            description={breed?.attributes?.description}
          />
        ))}
      </div>
    </div>
  );
};
