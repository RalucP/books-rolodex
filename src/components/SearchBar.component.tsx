import { ChangeEvent } from "react";

type SearchBarProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChangeHandler, placeholder, className }: SearchBarProps) => (
  <input 
    type="search" 
    className={className}
    placeholder={placeholder} 
    onChange={(e) => onChangeHandler(e)} 
  />
)

export default SearchBar;