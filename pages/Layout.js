import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Navbar2 from '../components/Navbar2';
import Navbar2b from '../components/Navbar2b';
import Navbar3 from '../components/Navbar3';
import React from 'react';
export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

const Layout = ({ children, navbarType, active }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {navbarType === 1 ? (
        <Navbar />
      ) : navbarType === 2 ? (
        <>
          <ThemeContext.Provider value={isOpen}>
            <ThemeUpdateContext.Provider value={setIsOpen}>
              <Navbar2 active={active} />
              <Navbar2b />
            </ThemeUpdateContext.Provider>
          </ThemeContext.Provider>
        </>
      ) : navbarType === 3 ? (
        <Navbar3 tipe={1} />
      ) : navbarType === 4 ? (
        <Navbar3 tipe={2} />
      ) : null}
      <main>{children}</main>
      {navbarType === 1 || navbarType === 3 ? <Footer /> : null}
    </>
  );
};

export default Layout;
