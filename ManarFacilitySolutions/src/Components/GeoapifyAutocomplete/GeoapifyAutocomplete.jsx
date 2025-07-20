import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const GeoapifyAutocompleteWrapper = ({ value, onChange }) => {
  const [query, setQuery] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const wrapperRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.geoapify.com/v1/geocode/autocomplete',
          {
            params: {
              text: query,
              apiKey: API_KEY,
              limit: 5,
            },
          }
        );
        setSuggestions(response.data.features);
      } catch (error) {
        console.error(error);
        setSuggestions([]);
      }
    };

    const timeoutId = setTimeout(fetchData, 300);
    return () => clearTimeout(timeoutId);
  }, [query, API_KEY]);

  // Proper outside click detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (place) => {
    const address = place.properties.formatted;
    setQuery(address);
    setSuggestions([]);
    setShowSuggestions(false);
    if (onChange) onChange(address);
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <input
        id="geoapify-autocomplete-input"
        type="text"
        placeholder="Enter your address"
        value={query}
        onFocus={() => {
          if (query.length >= 3 && suggestions.length > 0) {
            setShowSuggestions(true);
          }
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          if (onChange) onChange(e.target.value);
          if (e.target.value.length >= 3) {
            setShowSuggestions(true);
          } else {
            setShowSuggestions(false);
          }
        }}
        required
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '0.7rem 0.9rem',
          border: '1px solid #cfd8e3',
          borderRadius: '4px',
          fontSize: '1rem',
        }}
        autoComplete="off"
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1px solid #ccc',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1000,
          }}
        >
          {suggestions.map((place) => (
            <li
              key={place.properties?.place_id || `${place.properties?.formatted}-${place.properties?.country}`}
              onMouseDown={() => handleSelect(place)}
              style={{
                padding: '0.5rem',
                cursor: 'pointer',
              }}
            >
              {place.properties?.formatted || 'Unknown address'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GeoapifyAutocompleteWrapper;
