import React from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Cta , Brand , Navbar, Article} from './components';
import './App.css';
import './index.css';
 


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
      <Article />

    </div>
  )
}

export default App;
