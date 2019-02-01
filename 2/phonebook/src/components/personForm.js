import React from 'react'

const personForm = ({ newName, newNumber, persons, setPersons, setNewName, setNewNumber}) => {

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const addPerson = (event) => {
		event.preventDefault()
		const nameObject = {
			name: newName,
			number: newNumber,
			id: newName,
		}

		 persons.filter(e => e.name === newName).length > 0
			? window.alert(`${newName} already in phonebook`)
		 	: setPersons(persons.concat(nameObject))
			
		setNewName('')
		setNewNumber('')
	}

	return (
		<form onSubmit={addPerson}>
			<div>
				nimi: <input value={newName} onChange={handleNameChange}/>
			</div>
			<div>numero: <input value={newNumber} onChange={handleNumberChange}/></div>
			<div>
				<button type="submit">lisää</button>
			</div>
		</form>	
	)
}

export default personForm

