import React, {useState} from 'react'

function CountExample()
 {
 	const [count, setCount] = useState(0)
	return (
			<div>
				<h1>{count}</h1>
				<button onClick={ () => setCount(count + 1) }>Plus number</button>
				<button onClick={ () => setCount(count - 1) }>Minus number</button>
			</div>
		)
}

export default CountExample;