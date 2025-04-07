import React from 'react'

const Country = ({ country }) => {
    const { name, area, capital, coatOfArms, flag } = country
    const languages = Object.values(country.languages)

    return (
        <div>
            <h1>Country Name : {name.common} {flag}</h1>
            <h3>Capital: {capital[0]}</h3>
            <h3>Area: {area} Km2</h3>
            <h3>Languages :</h3>
            {
                languages.map(lang => <p key={lang}>{lang}</p>)
            }
            <img width={150} src={coatOfArms.png}/>
        </div>
    )
}

export default Country