export interface IBreedListResp {
  data: {
    id: string;
    attributes: {
      name: string;
      description: string;
    };
  }[];
}

export interface IBreedDetailstResp {
  data: {
    id: string;
    attributes: {
      name: string;
      description: string;
      life: {
        max: number;
        min: number;
      };
      hypoallergenic: boolean;
    };
  };
}

export interface IBreedsDetailsPageModuleProps {
  breed: IBreedDetailstResp;
}

export interface IBreedCardProps {
  name?: string;
  description?: string;
  id?: string;
  min_life?: number;
  max_life?: number;
  hypoallergenic?: boolean;
}
