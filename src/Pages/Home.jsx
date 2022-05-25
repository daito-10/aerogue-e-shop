import React from 'react';
import Message from '../Components/Message/message';
import Navbar from '../Components/Navbar/navbar';
import Section from '../Components/Section/section';
import PSection from './../Components/Product Section - HomePage/pSection';
import ISection from '../Components/Info Section/iSection';
import Footer from './../Components/Footer/footer';

const Home = () => {
    return ( 
        <>
            <Message />
            <Navbar />
            <Section />
            <PSection />
            <ISection />
            <Footer />
        </>
     );
}
 
export default Home;