import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HelloWorld from './Components/HelloWorld'
import CountExample from './Components/CountExample'

function App() {
  return (
    <div>
    	<Header />

    	<HelloWorld  name="Aung Aung" />

    	<CountExample />

    	<Footer />
    </div>
  );
}

export default App;
