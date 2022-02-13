import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers' 
import './scss/_reset.scss'
import './scss/_globals.scss'

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
