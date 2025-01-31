import React from "react";
import Contador from "./Contador";

const App = () => {
  const nextFullMoon = new Date(Date.UTC(2025, 1, 12, 17, 30, 0)); // 24 de febrero 2025, 17:30 UTC

  return (
    <div>
      <Contador targetDate={nextFullMoon} />
    </div>
  );
};

export default App;
