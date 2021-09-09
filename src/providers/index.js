import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
  return <UsersProvider>{children}</UsersProvider>;
};

export default Providers;
