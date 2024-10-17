import Link from "next/link";
import cls from "./BreedCard.module.scss";
import { IBreedCardProps } from "@/interfaces";

export const BreedCard = ({
  name,
  description,
  id,
  max_life,
  min_life,
  hypoallergenic,
}: IBreedCardProps) => {
  if (!name || !description || !id) {
    return <div>Sorry, something goes wrong</div>;
  }

  return (
    <div className={cls.breedCardContainer}>
      <h1>{name}</h1>
      <p>{description}</p>
      {max_life && (
        <p>
          <span>Max life time:</span> <span>{max_life}</span>
        </p>
      )}
      {min_life && (
        <p>
          <span>Min life time:</span> <span>{min_life}</span>
        </p>
      )}
      {hypoallergenic && (
        <p>
          <span>Is hypoalergenic:</span>{" "}
          <span>{hypoallergenic ? "yes" : "no"}</span>
        </p>
      )}
      {max_life && (
        <Link className={cls.linkStyle} href={`breeds/${id}`}>
          Go to details
        </Link>
      )}
    </div>
  );
};
