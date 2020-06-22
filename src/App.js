import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CountExample from './Components/CountExample'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Product from './Views/Product'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
    	<Router>

    		<Header />

    		<div className="p-3">

		    	<CountExample />
		    
		    	<Switch>
		    		<Route exact path="/">
		    			<Home />
		    		</Route>

		    		<Route path="/about">
		    			<About />
		    		</Route>

		    		<Route path="/product/:id">
		    			<Product />
		    		</Route>

		    		<Route path="/contact">
		    			<Contact />
		    		</Route>
		    	</Switch>

    		</div>

	    	<Footer />

    	</Router>
    </div>
  );
}

export default App;
