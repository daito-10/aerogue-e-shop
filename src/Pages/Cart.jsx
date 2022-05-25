import React from 'react';
import Navbar from './../Components/Navbar/navbar';
import CartSlice from './../Components/Cart/cart';
import Footer from './../Components/Footer/footer';

const Cart = () => {
    return ( 
        <>
            <Navbar />
            <CartSlice />
            <Footer />
        </>
     );
}
 
export default Cart;