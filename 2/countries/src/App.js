import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country';
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchParam, setSearchParam] = useState('')
  const [showAll, setShowAll] = useState(true)

	useEffect(() => {
		axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = showAll
		? countries
		: countries.filter(country => country.name.toUpperCase().includes(searchParam.toUpperCase()))

  const rows = () => {
      if (countriesToShow.length > 10) {
        return <p>Too many matches, specify another filter</p>
      } else if (countriesToShow.length > 1) {
        return countriesToShow.map(country => <p key={country.name}>{country.name}</p>)
      } else if (countriesToShow.length === 1){
        return (
          <div>
            <h1>{countriesToShow[0].name}</h1>
            <p>Capital: {countriesToShow[0].capital}</p>
            <p>Population: {countriesToShow[0].population}</p>
            <h2>Languages</h2>
            <ul>
              {countriesToShow[0].languages.map(lang => <li key={lang.name}>{lang.name}</li> )}
            </ul>
            <img src={countriesToShow[0].flag} alt={countriesToShow[0].name} height="100px" border="1px"/>
          </div>
        
        )
      } else {
        return <p>No matches found</p>
      }
  }

	return (
    <div>
    <Filter setSearchParam={setSearchParam} setShowAll={setShowAll}/>
    {rows()}
    </div>
	)
}

export default App