import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hello from './components/Hello.jsx';
import './css/tailwind.css';

function App() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col w-full fixed pin-l pin-y">
        <Header />
        <div className="px-4 pt-4 flex-1 overflow-y-scrol">
          <Hello />
        </div>
        <Footer />
      </div >
    </div >
  );
}

export default App;
