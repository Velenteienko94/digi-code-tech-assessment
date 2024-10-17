"use client";

import { getBreedsList } from "@/api";
import { IBreedListResp } from "@/interfaces";
import { useEffect, useState } from "react";

export const useGetBreeds = () => {
  const [breeds, setBreeds] = useState<IBreedListResp | undefined>();
  const getData = async () => {
    const resp = await getBreedsList();
    setBreeds(resp);
  };
  useEffect(() => {
    if (!breeds) {
      getData();
    }
  }, [breeds]);

  return {
    breeds,
  };
};
