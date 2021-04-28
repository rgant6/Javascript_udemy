const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
        if (response.status === 200){
            return response.json()
        } else{
            throw new Error(`Unable to fetch the country`)
        }
    }).then((data) => {
        data.forEach(country => {
            if (country.alpha2Code === countryCode){
                countryRet = country.name
            }
        })
        return countryRet
    })
}

const getLocation = () => {
    return fetch(`https://ipinfo.io/json?token=82102276a94b17`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error(`Unable to fetch your location`)
        }
    })
}

// Could also use the below instead of a forEach loop
// const country = data.find((country) => country.alpha2Code === countryCode)
// return country.name