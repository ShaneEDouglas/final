import React, { useState } from 'react'
import Logo from '../images/newslogo.png';
import magnifyingglass from '../images/magnifyingglass.png';



const Topbar = ({onSearch, onCategoryChange}) => {


  const [searchInput, setSearchInput] = useState('');


  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchInput);
  };



  return (
    <nav className="topbar">
      

      <div className="left-group">
        <span className="news-app-title">News App</span>
        <ul className="nav-links">
          <li><button onClick={() => onCategoryChange('sports')}>Sports</button></li>
          <li><button onClick={() => onCategoryChange('weather')}>Weather</button></li>
          <li><button onClick={() => onCategoryChange('comedy')}>Comedy</button></li>
          <li><button onClick={() => onCategoryChange('business')}>Buisness</button></li>
        </ul>
      </div>
      
      <div className="search-container">
        <input 
        className="input-field" 
        type="text" 
        placeholder='Search Content...' 
        value = {searchInput}
        onChange = {handleSearchInputChange}
        
        />


        <button className="search-button" onClick={handleSearchSubmit}> 
            <img src={magnifyingglass} alt="Search" /> 
        </button>
      </div>


      </nav>
  )
}

export default Topbar;