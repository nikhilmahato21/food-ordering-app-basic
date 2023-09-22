import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "dummy",
    email: "dummy@og.com",
  },
});

export default userContext;
