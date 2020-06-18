import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home() {
	return(	
		<div>
			<h1 className="font-bold text-2xl">This is the home page</h1>
			<p>This is the home page content</p>
    		<HelloWorld  name="Aung Aung" />
		</div>

		)
}

export default Home