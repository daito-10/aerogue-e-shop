import React from 'react';
import './productsPage.css';
import Navbar from './../../Components/Navbar/navbar';
import Footer from './../../Components/Footer/footer';
import Filterbar from '../../Components/FilterBar/filterbar';
import ProductsDisplay from './../../Components/Products Display/pDisplay';

const Products = () => {
    return ( 
        <>
            <Navbar />
            <div className='section'>
                
                <div className="filterbar">
                    <Filterbar />
                </div>

                <div className="productsdisplay">
                    <ProductsDisplay />
                </div>
                
            </div>
            <Footer />
        </>
     );
}
 
export default Products;