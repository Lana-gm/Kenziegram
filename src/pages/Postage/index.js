import Header from "../../components/Header";
import { useState } from "react";
import SearchImage from "../../components/SearchImage";

const Postage = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Header />
      <SearchImage />
    </>
  );
};

export default Postage;
