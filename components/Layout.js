import { useState, useEffect } from 'react';
import Footer from './Footer';

import Navbar from './Navbar';

const Layout = ({children}) => {

const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      setOnTop(window.scrollY == 0);
    })
  }, []);

  return ( 
    <div className="content font-body">
      <div className="sticky top-0">
        <Navbar onTop={onTop} />
      </div>
      { children }
      <Footer />
    </div>
   );
}
 
export default Layout;