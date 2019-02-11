import React from 'react'

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
		}

		 if (persons.filter(e => e.name === newName).length > 0) {
      
      if (window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        personService
        .update(persons.filter(person => person.name === newName)[0].id, nameObject)
        .then(
          setNewName(''),
          setNewNumber(''),
          setErrorMessage("Muokattiin onnistuneesti"),
          setTimeout(() => {
            setErrorMessage(null)
          }, 2000)
        )
        }
       } else {
        personService
        .create(nameObject)
        .then(
          setNewName(''),
          setNewNumber(''),
          setErrorMessage("Lisättiin onnistuneesti"),
          setTimeout(() => {
          setErrorMessage(null)
          }, 5000)
        )
        .catch(error => {
          setErrorMessage(`Error: ${error.response.data.error}`)
          setTimeout(() => {
          setErrorMessage(null)
          }, 10000)
        })
     }

     personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
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

