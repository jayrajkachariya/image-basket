import React from 'react';

import './Search.css';

const Search = ({ value, onChangeInput, onKeyPressed, ...props }) => (
  <input
    type="text"
    value={value}
    onChange={onChangeInput}
    className="input"
    onKeyPress={onKeyPressed}
    {...props}
  />
);

export default Search;
