import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThumbDetail from '../components/ThumbDetail'

function Home() {
    const [countries, setCountries] = useState([])
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')

    useEffect(async () => {
        // https://restcountries.eu/rest/v2/region/{region}
        const res = await fetch('https://restcountries.eu/rest/v2/region/asia')
        // const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        await setCountries(data)
    }, [])

    
    return (    
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                
            </div>
            
            <div className="container grid grid-cols-4 gap-16 mx-auto">
                {countries.map( (country, index ) => <Link to={{ pathname : "details", state: country }}  key={index}><ThumbDetail 
                                                title={country.name} 
                                                image_url={country.flag} 
                                                population={country.population}
                                                region={country.region}
                                                capital={country.capital}
                                                subregion={country.subregion}
                                                borders = {country.borders}
                                                languages={country.languages}

                                            /></Link> )}
            </div>
        </div>
    )
}

export default Home
