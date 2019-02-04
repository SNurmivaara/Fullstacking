import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'
import personService from './services/person'
import Notification from './components/notification'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [showAll, setShowAll] = useState(true)
  const [searchParam, setSearchParam] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  },[])
  
  const handleDestroy = id => {
    if (window.confirm(`Haluatko varmasti poistaa käyttäjän?`)) {
      personService
      .destroy(id).then(
        setErrorMessage("Poistettiin onnistuneesti"),
        setTimeout(() => {
          setErrorMessage(null)
        }, 2000)
        )
      .catch(error => {
        console.log(error)
        alert(
          'henkilö on jo poistettu'
        )
        setPersons(persons.filter(p => p.id !== id))
      })
    }
  }

	return (
		<div>

      <Notification message={errorMessage} />

			<h2>Puhelinluettelo</h2>
			
			<Filter setShowAll={setShowAll} setSearchParam={setSearchParam} />

			<h3>Lisää uusi</h3>

			<PersonForm 
				newName={newName}
				newNumber = {newNumber}
				persons = {persons}
				setPersons = {setPersons}
				setNewName = {setNewName}
        setNewNumber = {setNewNumber}
        personService = {personService}
        setErrorMessage = {setErrorMessage}
			/>
	
			<h3>Numerot</h3>
			
			<Persons 
				persons = {persons}
				showAll = {showAll} 
				searchParam = {searchParam}
				handleDestroy = {handleDestroy}
			/>
		</div>
	)
}

export default App