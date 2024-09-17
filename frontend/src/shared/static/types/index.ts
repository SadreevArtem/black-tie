export type OrderInput = {
    name: string;
    phone: string;
  };

  export type Order = {
    id: number;
    name: string;
    phone: string;
    createdAt: string;
  };

  export type Programm = {
    id: number;
    name: string;
    description: string;
    image: string;
    currentPrice: string;
    services: string;
    published: boolean;
    createdAt: string;
  };


export type FilesModel = {
  originalname: string,
  filename: string,
  path: string,
}

export type Services = {
  id: number;
  name: string;
  description: string;
  image: string;
};
