import {Component} from 'react'

import CountriesList from './components/CountriesList'

import VisitedCountries from './components/VisitedCountries'

import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]
// <CountriesList countriesList={initialCountriesList} />

// Replace your code here
class App extends Component {
  state = {countriesList: initialCountriesList, visitedCountries: []}

  componentDidMount() {
    this.getVisitedCountries()
  }

  onClickVisitButton = countryId => {
    this.setState(
      prevState => ({
        countriesList: prevState.countriesList.map(eachCountry => {
          if (eachCountry.id === countryId) {
            return {...eachCountry, isVisited: !eachCountry.isVisited}
          }
          return eachCountry
        }),
      }),
      this.getVisitedCountries,
    )
  }

  getVisitedCountries = () => {
    const {countriesList} = this.state

    const updatedCountriesList = countriesList.filter(
      eachCon => eachCon.isVisited === true,
    )

    console.log(updatedCountriesList)
    this.setState({visitedCountries: updatedCountriesList})
  }

  onRemoveCountry = conId => {
    const {visitedCountries} = this.state

    const updatedVisitedCountries = visitedCountries.filter(
      eachVisitedCountry => eachVisitedCountry.id !== conId,
    )

    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(eachCountry => {
        if (eachCountry.id === conId) {
          return {...eachCountry, isVisited: !eachCountry.isVisited}
        }
        return eachCountry
      }),
    }))

    this.setState({visitedCountries: updatedVisitedCountries})
  }

  render() {
    const {visitedCountries, countriesList} = this.state
    console.log(visitedCountries)
    return (
      <div className="bg-container">
        <div className="countries-main-container">
          <h1 className="countries-heading">Countries</h1>
          <div className="countries-list-container">
            <ul className="countries-list-container">
              {countriesList.map(eachCountry => (
                <CountriesList
                  key={eachCountry.id}
                  countryDetails={eachCountry}
                  onClickVisitButton={this.onClickVisitButton}
                />
              ))}
            </ul>
          </div>
          <h1 className="visited-countries">Visited Countries</h1>
          <ul className="visited-countries-container">
            {visitedCountries.length !== 0 ? (
              visitedCountries.map(eachVisitedCountry => (
                <VisitedCountries
                  visitedCountryDetails={eachVisitedCountry}
                  key={eachVisitedCountry.id}
                  onRemoveCountry={this.onRemoveCountry}
                />
              ))
            ) : (
              <p className="no-countries">No Countries Visited Yet</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App