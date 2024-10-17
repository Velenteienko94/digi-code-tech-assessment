import { useTranslations } from "next-intl";

import cls from "./BreedsPageModule.module.scss";
import { BreedCard } from "@/components/lib/breed-card/BreedCard";
import { IBreedListResp } from "@/interfaces";

export const BreedsPageModule = ({
  breeds,
}: {
  breeds: IBreedListResp | undefined;
}) => {
  const t = useTranslations("BreedsPage");
  const breedsList = breeds?.data;
  if (!breedsList) {
    return <div>Sorry, something goes wrong, no data</div>;
  }
  return (
    <div className={cls.breedsPageConteiner}>
      <h1>{t("title")}</h1>
      <h3>{t("about")}</h3>
      <div className={cls.breedsContainer}>
        {breedsList?.map((breed) => (
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
