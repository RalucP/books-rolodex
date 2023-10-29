import PropTypes from "prop-types";

const SearchBar = ({ onChangeHandler, placeholder, className }) => (
  <input 
    type="search" 
    className={className}
    placeholder={placeholder} 
    onChange={onChangeHandler} 
  />
)

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
}

export default SearchBar;