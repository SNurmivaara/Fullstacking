import React from 'react'

const Person = ({ persons, showAll, searchParam, handleDestroy }) => {

	const rows = () => personsToShow.map(person => 
		<p key={person.name}>{person.name} {person.number} <button onClick={() => handleDestroy(person.id)}>poista</button> </p>
	)

	const personsToShow = showAll
		? persons
		: persons.filter(person => person.name.toUpperCase().includes(searchParam.toUpperCase()))

	return (
		rows()
	)
}

export default Person