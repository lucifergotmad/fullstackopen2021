import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const filteredCountries = countries.map((country) => console.log(country));
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (e) => setFilter(e.target.value);
  return (
    <div>
      find countries : <input onChange={handleFilterChange} />
      <p>too many countries</p>
      {filteredCountries}
    </div>
  );
}

export default App;
