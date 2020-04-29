import React from 'react';
import './App.css';

function App() {
  const products = [
    't-shirt',
    'shorts',
    'pants',
    'shoes',
  ];

  return (
    <div className="App">
      <main>
        <div className="products">
          {
            products.map(p => (
              <div
                style={{
                  height: '200px',
                  width: '150px',
                  border: '1px solid #eaeaea'
                }}
              >
                {p}
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
