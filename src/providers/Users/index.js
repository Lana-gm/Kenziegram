import { createContext, useState, useEffect } from "react";

import { onUserList } from '../../firebaseApi';

import { useAuth } from '../../providers/Auth';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {

  const { loggedUser } = useAuth();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(loggedUser) {
      let unsub = onUserList(setUsers);
      return unsub;
    }    
  }, [loggedUser]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
