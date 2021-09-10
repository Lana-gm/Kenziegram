import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "Kelvin Cantarino",
      email: "kelvin@email.com",
      password: "123456",
      status: "online",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "João Pereira",
      email: "joao@email.com",
      password: "123456",
      status: "online",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "Maria Rejane",
      email: "maria@email.com",
      password: "123456",
      status: "online",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "Euripedes Inacio",
      email: "euripedes@email.com",
      password: "123456",
      status: "ofline",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "Rodolfo du Reis",
      email: "rodolfo@email.com",
      password: "123456",
      status: "ofline",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "Manuel Jose",
      email: "manuel@email.com",
      password: "123456",
      status: "online",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "Camila Pereira Silva",
      email: "Camila@email.com",
      password: "123456",
      status: "online",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "Dirundina Sousa",
      email: "Dirundina@email.com",
      password: "123456",
      status: "online",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "Marlei Sousa",
      email: "Marlei@email.com",
      password: "123456",
      status: "online",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
    {
      name: "Miqueias Novas",
      email: "Miqueias@email.com",
      password: "123456",
      status: "online",
      img: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
