import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countryDetails

  const clickVisitButton = () => {
    onClickVisitButton(id)
  }

  return (
    <li className="each-country">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-button">Visited</p>
      ) : (
        <button
          className="visit-button"
          type="button"
          onClick={clickVisitButton}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
