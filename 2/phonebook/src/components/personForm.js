import React from 'react'
import person from '../services/person';

const personForm = ({ newName, newNumber, persons, setPersons, setNewName, setNewNumber, personService, setErrorMessage}) => {

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

		 if (persons.filter(e => e.name === newName).length > 0) {
      if (window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        personService
        .update(nameObject.id, nameObject)
        .then(
          setErrorMessage("Muokattiin onnistuneesti"),
          setTimeout(() => {
            setErrorMessage(null)
          }, 2000)
          )
        }
       } else {
        personService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(nameObject))
          setNewName('')
          setNewNumber('')
          setErrorMessage("Lisättiin onnistuneesti")
          setTimeout(() => {
          setErrorMessage(null)
          }, 2000)
        })
     }
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

