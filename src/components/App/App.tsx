import { FC } from "react";
import Background from "../Background";
import Paper from "../Paper";
import data from "./data.json";

const App: FC = () => {
  return (
    <Background>
      <Paper>
        <h1>{data.h1}</h1>
      </Paper>
    </Background>
  );
};

export default App;
