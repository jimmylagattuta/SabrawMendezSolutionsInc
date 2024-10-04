import React from 'react';
import './Home.css';
import Intro from '../../components/homeSections/Intro';
import BraceReliefFeature from '../../components/homeSections/BraceReliefFeature';
import BraceSupportFeature from '../../components/homeSections/BraceSupportFeature';
import BraceComfortFeature from '../../components/homeSections/BraceComfortFeature';
import BraceEaseOfUseFeature from '../../components/homeSections/BraceEaseOfUseFeature';
import ContactUsChatbox from '../../components/homeSections/ContactUsChatbox';

const Home = () => {
  console.log('Home');
  return (
    <div>
      <Intro />
      <BraceReliefFeature />
      <BraceSupportFeature />
      <BraceComfortFeature />
      <BraceEaseOfUseFeature />
      <ContactUsChatbox />
    </div>
  );
}

export default Home;
