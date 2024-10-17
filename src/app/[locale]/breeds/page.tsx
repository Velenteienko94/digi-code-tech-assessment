import { getBreedsList } from "@/api";
import { BreedsPageModule } from "@/components/modules";

export default async function Page() {
  const breeds = await getBreedsList();
  return <BreedsPageModule breeds={breeds} />;
}
