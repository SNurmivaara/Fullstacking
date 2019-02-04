import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'
import axios from 'axios'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [showAll, setShowAll] = useState(true)
	const [searchParam, setSearchParam] = useState('')

	useEffect(() => {
		axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
	},[])

	return (
		<div>
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
			/>
	
			<h3>Numerot</h3>
			
			<Persons 
				persons = {persons}
				showAll = {showAll} 
				searchParam = {searchParam}
			/>
		</div>
	)
}

export default App