import React from 'react';
const api = {
  key: "7907a22002aa76a693df37bf684e6845",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
