import React from 'react';

import './search-box.styles.css';

// this is a functional component that do not access to class internal state and lifecycle method
// a functional component that gets some props and return html element
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className = 'search'
        type='search'
        placeholder={placeholder} 
        // destructure
        onChange={handleChange}
        //onChange={e => this.setState ({ searchField: e.target.value})}
    />
);