"use client";

import { getBreedDetails } from "@/api";
import { IBreedDetailstResp } from "@/interfaces";
import { useEffect, useState } from "react";

export const useGetBreedsDetails = (id: string) => {
  const [breed, setBreed] = useState<IBreedDetailstResp | undefined>();
  const getData = async () => {
    const resp = await getBreedDetails(id);
    setBreed(resp);
  };
  useEffect(() => {
    if (!breed) {
      getData();
    }
  }, [breed]);

  return {
    breed: breed?.data,
  };
};
