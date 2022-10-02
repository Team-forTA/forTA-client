import React, { useEffect, useState } from 'react';

function App() {
  const [serverStatus, setServerStatus] = useState(false);

  useEffect(() => {
    setServerStatus(false);
  }, []);

  return (
    <div className="App">
      <div>initial setting</div>
      <div>check server = {serverStatus ? 'connected' : 'not connected'}</div>
    </div>
  );
}

export default App;
