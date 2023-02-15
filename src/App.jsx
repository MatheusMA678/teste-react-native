import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [itens, setItens] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://3000-matheusma67-testereactn-rklsfk8bdz2.ws-us87.gitpod.io/"
      )
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, [setItens]);

  return <div></div>;
}

export default App;
