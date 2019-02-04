import React from 'react'

const Filter = ({ setShowAll, setSearchParam }) => {
	const handleSearchParamChange = (event) => {
		setShowAll(false)
		setSearchParam(event.target.value)
	}

	return (
		<p>find countries <input onChange={handleSearchParamChange}/></p>
	)
}

export default Filter