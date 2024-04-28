import React from 'react'
import HeaderCategory from '../UiUxDesignPage/HeaderCategory';
import Contact from '../HomePage/Contact';
import Footer from '../HomePage/Footer';
import Copyright from '../HomePage/Copyright';
import DealerAppUICom from './DealerAppUICom';

const DealerAppUIPage = () => {
    return (
        <>
          <HeaderCategory />
          <DealerAppUICom />
          <Contact />
          <Footer />
          <Copyright />
        </>
      );
}

export default DealerAppUIPage;