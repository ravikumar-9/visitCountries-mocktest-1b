import './index.css'

const VisitedCountries = props => {
  console.log(props)
  const {visitedCountryDetails, onRemoveCountry} = props

  const {id, name, imageUrl} = visitedCountryDetails

  const removeCountry = () => {
    onRemoveCountry(id)
  }

  return (
    <li className="visited-country-card">
      <img src={imageUrl} alt="thumbnail" className="country-flag" />
      <div className="name-container">
        <p className="visited-country-name">{name}</p>
        <button className="remove-button" type="button" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
