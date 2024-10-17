import { IBreedDetailstResp, IBreedListResp } from "@/interfaces";

export const getBreedsList = async () => {
  const url = "https://dogapi.dog/api/v2/breeds";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data: IBreedListResp = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getBreedDetails = async (id: string) => {
  const url = `https://dogapi.dog/api/v2/breeds/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data: IBreedDetailstResp = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
