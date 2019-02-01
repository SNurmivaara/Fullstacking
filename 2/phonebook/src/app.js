import React, { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'

const App = () => {
	const [persons, setPersons] = useState([
		{name: 'Arto Hellas', number: '050-12345670'},
		{name: 'Testi Tyyppi', number: '050-12345670'},
		{name: 'Bertta Baari', number: '050-12345670'},
		{name: 'Kalja Kalle', number: '050-12345670'},
		{name: 'Arto Kalle', number: '050-12345670'}
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [showAll, setShowAll] = useState(true)
	const [searchParam, setSearchParam] = useState('')

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