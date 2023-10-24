import { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  
  render(){
    const { onChangeHandler, placeholder, className } = this.props;

    return(
      <input 
        type="search" 
        className={className}
        placeholder={placeholder} 
        onChange={onChangeHandler} 
      />
    )
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
}

export default SearchBar;