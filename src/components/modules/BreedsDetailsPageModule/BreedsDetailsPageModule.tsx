"use client";

import { useTranslations } from "next-intl";

import cls from "./BreedsDetailsPageModule.module.scss";
import { BreedCard } from "@/components/lib/breed-card/BreedCard";
import { useParams } from "next/navigation";
import { useGetBreedsDetails } from "@/hooks";

export const BreedsDetailsPageModule = () => {
  const t = useTranslations("BreedsDetailPage");
  const { id } = useParams();
  const breedId = Array.isArray(id) ? id[0] : id;
  const { breed } = useGetBreedsDetails(breedId);
  if (!breed || !id) {
    return <div>Sorry, something goes wrong, no data</div>;
  }
  return (
    <div className={cls.breedsDetailsPageConteiner}>
      <h1>{t("title")}</h1>
      <h3>{t("about")}</h3>
      <div className={cls.breedsContainer}>
        <BreedCard
          key={breed?.id}
          id={breed?.id}
          name={breed?.attributes?.name}
          description={breed?.attributes?.description}
          max_life={breed?.attributes?.max_life}
          min_life={breed?.attributes?.min_life}
          hypoallergenic={breed?.attributes?.hypoallergenic}
        />
      </div>
    </div>
  );
};
