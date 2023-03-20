import { useState } from "react";
import { CAMPSITES } from "../shared/campsites";
import DirectoryScreen from "./DirectoryScreen";

const Main = () => {
  const [campsites, setcampsites] = useState(CAMPSITES);

  return <DirectoryScreen campsites={campsites} />;
};

export default Main;
