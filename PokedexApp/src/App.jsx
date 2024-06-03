import { useEffect, useState } from "react";
import "./App.css";

import useFetch from "./hooks/useFetch";

import PokeHomeContainer from "./components/PokeHomeContainer";

function App() {

  

  return (
      <main>
        <PokeHomeContainer />
      </main>
  );
}

export default App;
