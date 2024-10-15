import React, { useState } from 'react';
import './App.css'; // Import CSS file
import logo from './logo.svg'; // Import logo
import configData from "./config.json";

function App() {
 // State to store the list of countries
 const [countries, setCountries] = useState([]);
 const baseUrl = configData.SERVER_URL;
   // Function to fetch the country list when the button is clicked
   const toCountryList = () => {
    
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON from response
      })
      .then((data) => {
        if (data && data.data) {
          setCountries(data.data); // Set the list of countries
        } else {
          console.error("Error fetching country data:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching the countries:", error);
      });
  };
  return (
    <div className="App"> {/* Add class to center content */}
      <header>
        <h1>&nbsp;</h1>
      </header>
      <main>
        
        <button onClick={toCountryList}>Country List</button>

         {/* Display the list of countries */}
         <div>
          {countries.length > 0 ? (
            countries.map((country, index) => (
              <div key={index}>{country}</div>
            ))
          ) : (
            <li>No countries to display</li>
          )}
        </div>

      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
}

export default App;
