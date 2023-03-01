import client from "@/api";
import type {
  IProductCategory,
  IProduct,
  ILoginPayload,
  IRegisterPayload,
} from "@/types";

export default {
  getAuth: () => {
    return client.post("/api/auth").then((response: any) => {
      return response;
    });
  },
  login: (payload: ILoginPayload) => {
    return client.post("/api/auth/login", payload).then((response: any) => {
      return response;
    });
  },
  register: (payload: IRegisterPayload) => {
    return client.post("/api/auth/sign-up", payload).then((response: any) => {
      return response;
    });
  },
  reset: () => {
    return client.post("/api/auth/password-change").then((response: any) => {
      return response;
    });
  },
  getCategories: () => {
    return client
      .get("/api/categories")
      .then(({ data: { data = [] } = {} }) => {
        return data as IProductCategory[];
      });
  },
  getProducts: () => {
    return client.get("/api/products").then(({ data: { data = [] } = {} }) => {
      return data as IProduct[];
    });
  },
};
