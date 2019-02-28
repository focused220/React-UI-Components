import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div class="card">
    <HeaderContainer />   
    <CardContainer /> 
    </div>
  );
};

export default App;
