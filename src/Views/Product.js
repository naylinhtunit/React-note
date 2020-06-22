import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Product() {
	const { id } = useParams()
	const url = `https://5ef02ae0ad6d710016179f45.mockapi.io/api/v1/product/${id}`
	const [product, setProduct] = useState(null)
	let content = null

	useEffect( () => {
		axios.get(url)
					.then(response => {
						setProduct(response.data)
					})
	}, [url])

	if (product) {
		return(
			content = 
							<div> 
								<h1 className="py-3">{ product.name }</h1>
								<div>
									<img
										src={ product.images }
										alt={ product.name }
									/>
									<div className="font-bold text-xl mb-3">
										$ { product.price }
									</div>
									<div>
										{ product.description }
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