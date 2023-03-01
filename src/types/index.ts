export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  lastName?: string;
  firstName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
}

export interface IResetPayload {
  email: string;
  password: string;
}

export interface IProductCategory {
  id: string;
  name: string;
  image: string;
}

export interface IProduct {
  id: string;
  name: string;
  featured: string;
  image: string;
  deliveryTime: string;
  minimalOrder: string;
  categories: IProductCategory[];
}
