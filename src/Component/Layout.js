import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => (
  <div
    style={{
      backgroundImage: "url('https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Ensures the background covers the full height
    }}
    className="flex flex-col"
  >
 <Nav/>
    <main className="flex-grow">
      {children}
    </main>
  </div>
);

export default Layout;
