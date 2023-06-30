import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch("https://registration-wmap.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (<> 
  <div>It is web site</div>
    <div className="App">
      <h1>{message}</h1>
    </div>
    </>
  );
}

export default App;