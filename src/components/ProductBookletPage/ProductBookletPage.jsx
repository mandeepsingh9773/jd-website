import React from 'react'
import HeaderCategory from '../UiUxDesignPage/HeaderCategory';
import Contact from '../HomePage/Contact';
import Footer from '../HomePage/Footer';
import Copyright from '../HomePage/Copyright';
import ProductBookletCom from './ProductBookletCom';

const ProductBookletPage = () => {
    return (
        <>
          <HeaderCategory />
          <ProductBookletCom />
          <Contact />
          <Footer />
          <Copyright />
        </>
      );
}

export default ProductBookletPage;