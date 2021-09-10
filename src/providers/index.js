import { UsersProvider } from "./Users";
import { AuthProvider } from './Auth';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UsersProvider>
        {children}
      </UsersProvider>
    </AuthProvider>    
  );
};

export default Providers;
