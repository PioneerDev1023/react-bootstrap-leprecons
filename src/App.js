import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Lore from './components/Lore/Lore'
import About from './components/About/About'
import Club from './components/Club/Club'
import Roadmap from './components/Roadmap/Roadmap'
import Team from './components/Team/Team'
import Faqs from './components/Faqs/Faqs'
import Footer from './components/Footer/Footer'

function App() {
  return (
    // 'div' will contain all the components
    <div className="App">      
      <Header/>
      <Slider/>
      <Lore />
      <About />
      <Club/>
      <Roadmap/>
      <Team/>
      <Faqs/>
      <Footer/>
        
    </div>
  );
}

export default App;
