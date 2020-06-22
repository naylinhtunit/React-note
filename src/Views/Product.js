import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import {useAxiosGet} from '../Hooks/HttpRequests'

function Product() {
	const { id } = useParams()
	const url = `https://5ef02ae0ad6d710016179f45.mockapi.io/api/v1/product/${id}`

	let product = useAxiosGet(url)
	
	let content = null

	if (product.error) {
		content = 
						<p className="py-3">There was an error please refresh or try again later!</p>
	}

	if (product.loading) {
		content = <Loader />
	}

	if (product.data) {
		return(
			content = 
							<div> 
								<h1 className="py-3">{ product.data.name }</h1>
								<div>
									<img
										src={ product.data.images }
										alt={ product.data.name }
									/>
									<div className="font-bold text-xl mb-3">
										$ { product.data.price }
									</div>
									<div>
										{ product.data.description }
									</div>
								</div>
							</div>
			)
	}

	return(
			<div>{ content }</div>
		)
}

export default Product