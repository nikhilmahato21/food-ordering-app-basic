import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  return <footer className="footer text-center  p-5">Hey,{user.name}</footer>;
};

export default Footer;
