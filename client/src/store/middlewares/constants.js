import { routes } from "../../routes/constants";

export const redirectUser = (error, history) => {
  return history?.push({ pathname: routes.error404, state: { error } });
};
