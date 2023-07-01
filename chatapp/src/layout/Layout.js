import React from 'react'

const Layout = ({ children }) => {
    return (
      <div className="layout">
        <header>
        Headder
        </header>
        <main>
          {children}
        </main>
        <footer>
          
        </footer>
      </div>
    );
  };
  
  export default Layout;
