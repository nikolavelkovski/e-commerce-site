export type FetchedProductProps = {
  id: number;
  title: string;
  price: number;
  stateId: number;
  categoryId: number;
  stock: boolean;
  picture: string;
  description: string;
};

export type FetchedProductsStatesProps = {
  id: number;
  name: string;
  tax: number;
};

export type FetchedProductsCategoryProps = {
  id: number;
  name: string;
};
