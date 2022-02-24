import React from 'react';
import Hero from '../Hero/Hero.component';
import Cards from '../../components/trending/Cards';
import Gap from '../../components/gap/index';
import FContainer from '../../components/choose-us/group';
import Footer from '../../components/footer/footer';
const Home = () => {
  return (
   <> 
      <Hero/>
      <Cards/>
    <Gap/>
    <FContainer/>
      <Footer/>
    </>
  );
};
export default Home;