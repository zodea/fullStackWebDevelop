import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [country, setCountry] = useState([])
  const [hasCountry, setHasCountry] = useState(false)
  const [conutryName, setConutryName] = useState('')

  const changeCountry = event => {
    setConutryName(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    console.log(conutryName)
    if (conutryName) {
      const promise = axios.get(`https://restcountries.eu/rest/v2/name/${conutryName}`)
      promise
        .then(response => {
          console.log(`response`, response)
          setHasCountry(true)
          if (response.data.length === 1) {
            setCountry(response.data)
            return
          } else if (response.data.length > 1 && response.data.length <= 10) {
            const names = response.data.map(data => data.name)
            setCountry(names)
            return
          }
          setCountry([])
          if (response.data.length === 0) {
            setHasCountry(false)
          }
        })
        .catch(err => {
          alert(err)
        })
    }
  }, [conutryName])
  return (
    <div>
      <div>
        find countries <input type="text" value={conutryName} onChange={changeCountry} />
      </div>
      {(hasCountry && country.length === 0 && 'Too many matches, specify another filter') || (
        <Country country={country}></Country>
      )}
    </div>
  )
}

const Country = ({ country }) => {
  console.log(country)
  if (country.length > 1) {
    return (
      <div>
        {country.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    )
  } else if (country.length === 1) {
    return (
      <div>
        <h2>{country[0].demonym}</h2>
        <div>capital {country[0].capital}</div>
        <div>population {country[0].population}</div>
        <h3>languages</h3>
        <ul>
          {country[0].languages.map((language, index) => (
            <li key={index}>{language.name}</li>
          ))}
        </ul>
        <img src={country[0].flag} alt=""/>
      </div>
    )
  } else {
    return ''
  }
}

export default App
