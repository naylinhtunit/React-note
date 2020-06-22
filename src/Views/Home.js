import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HelloWorld from '../Components/HelloWorld'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import {useAxiosGet} from '../Hooks/HttpRequests'

function Home() {
	const url = `https://5ef02ae0ad6d710016179f45.mockapi.io/api/v1/product?page=1&limit=10`;
	let products = useAxiosGet(url) 
	let content = null;

	if (products.error) {
		content = 
						<p className="py-3">There was an error please refresh or try again later!</p>
	}

	if (products.loading) {
		content = <Loader />
	}

	if (products.data) {
		return(
			content = 
							products.data.map((product) => 
								<div key={product.id}> 
									<ProductCard 
										product={product}
									/>
								</div>
								)
			)
	}

	return(	
		<div>
    		<HelloWorld  name="Aung Aung" />
			<h1 className="font-bold text-2xl">Best seller</h1>
			{ content }
		</div>

		)
}

export default Home