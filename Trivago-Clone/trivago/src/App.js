import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./Pages/HomePage";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/MainData").then((data) => {
      setData(data.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
