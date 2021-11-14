import { redirectUser } from "./constants";

const errorMiddleware = (state) => (next) => (action) => {
  const { type } = action;
  if (type.match("FAILURE")) {
    redirectUser(action.payload.error, action.payload.redirect)
  }
  return next(action);
};

export default errorMiddleware;
