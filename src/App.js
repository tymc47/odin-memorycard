import { useState } from "react";

function App() {
  const [state, setState] = useState(0)

  return (
    <div className="App">
      {state}
    </div>
  );
}

export default App;
