import React from 'react'

const Person = ({ persons, showAll, searchParam }) => {
	const rows = () => personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)

	const personsToShow = showAll
		? persons
		: persons.filter(person => person.name.toUpperCase().includes(searchParam.toUpperCase()))

	return (
		rows()
	)
}

export default Person