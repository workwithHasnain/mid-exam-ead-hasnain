import React, { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    city: "New York",
    occupation: "Engineer",
  },

  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    city: "San Francisco",
    occupation: "Designer",
  },

  {
    id: 3,
    name: "Bob Johnson",
    age: 28,
    city: "Chicago",
    occupation: "Accountant",
  },

  {
    id: 4,
    name: "Alice Brown",
    age: 35,
    city: "Los Angeles",
    occupation: "Teacher",
  },

  {
    id: 5,
    name: "Charlie Wilson",
    age: 40,
    city: "Houston",
    occupation: "Doctor",
  },

  { id: 6, name: "Eva Davis", age: 22, city: "Miami", occupation: "Artist" },

  {
    id: 7,
    name: "Frank Miller",
    age: 32,
    city: "Seattle",
    occupation: "Software Engineer",
  },

  {
    id: 8,
    name: "Grace Taylor",
    age: 45,
    city: "Boston",
    occupation: "Lawyer",
  },

  {
    id: 9,
    name: "Henry Clark",
    age: 28,
    city: "Denver",
    occupation: "Marketing Manager",
  },

  {
    id: 10,
    name: "Ivy Adams",
    age: 33,
    city: "Atlanta",
    occupation: "Entrepreneur",
  },
];

const cities = ["New York", "San Francisco", "Chicago", "Los Angeles", "Houston", "Miami", "Seattle", "Boston", "Denver", "Atlanta"];
const occupations = ["Engineer", "Designer", "Accountant", "Teacher", "Doctor", "Artist", "Software Engineer", "Lawyer", "Marketing Manager", "Entrepreneur"];

function App() {
  const [nameFilter, setNameFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [occupationFilter, setOccupationFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleAgeFilterChange = (event) => {
    setAgeFilter(event.target.value);
  };

  const handleCityFilterChange = (event) => {
    setCityFilter(event.target.value);
  };

  const handleOccupationFilterChange = (event) => {
    setOccupationFilter(event.target.value);
  };

  const filterData = () => {
    const filteredData = data.filter((item) => {
      if (nameFilter && ageFilter && cityFilter && occupationFilter) {
        return (
          item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          item.age.toString().includes(ageFilter) &&
          item.city === cityFilter &&
          item.occupation === occupationFilter
        );
      } else if (nameFilter && ageFilter && cityFilter) {
        return (
          item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          item.age.toString().includes(ageFilter) &&
          item.city === cityFilter
        );
      } else if (nameFilter && ageFilter && occupationFilter) {
        return (
          item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          item.age.toString().includes(ageFilter) &&
          item.occupation === occupationFilter
        );
      } else if (nameFilter && cityFilter && occupationFilter) {
        return (
          item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          item.city === cityFilter &&
          item.occupation === occupationFilter
        );
      } else if (ageFilter && cityFilter && occupationFilter) {
        return (
          item.age.toString().includes(ageFilter) &&
          item.city === cityFilter &&
          item.occupation === occupationFilter
        );
      } else if (nameFilter && ageFilter) {
        return (
          item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          item.age.toString().includes(ageFilter)
        );
      } else if (nameFilter && cityFilter) {
        return (
          item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          item.city === cityFilter
        );
      } else if (nameFilter && occupationFilter) {
        return (
          item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          item.occupation === occupationFilter
        );
      } else if (ageFilter && cityFilter) {
        return (
          item.age.toString().includes(ageFilter) &&
          item.city === cityFilter
        );
      } else if (ageFilter && occupationFilter) {
        return (
          item.age.toString().includes(ageFilter) &&
          item.occupation === occupationFilter
        );
      } else if (cityFilter && occupationFilter) {
        return (
          item.city === cityFilter &&
          item.occupation === occupationFilter
        );
      } else if (nameFilter) {
        return item.name.toLowerCase().includes(nameFilter.toLowerCase());
      } else if (ageFilter) {
        return item.age.toString().includes(ageFilter);
      } else if (cityFilter) {
        return item.city === cityFilter;
      } else if (occupationFilter) {
        return item.occupation === occupationFilter;
      } else {
        return true;
      }
    });
    setFilteredData(filteredData);
  };

  const resetFilter = () => {
    setNameFilter("");
    setAgeFilter("");
    setCityFilter("");
    setOccupationFilter("");
    setFilteredData(data);
  };

  return (
    <div>
      <div>
        <label htmlFor="nameFilter">Name:</label>
        <input
          type="text"
          id="nameFilter"
          name="nameFilter"
          placeholder="Enter name"
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
        <label htmlFor="ageFilter">Age:</label>
        <input
          type="number"
          id="ageFilter"
          name="ageFilter"
          placeholder="Enter age"
          value={ageFilter}
          onChange={handleAgeFilterChange}
        />
        <label htmlFor="cityFilter">City:</label>
        <select
          id="cityFilter"
          name="cityFilter"
          value={cityFilter}
          onChange={handleCityFilterChange}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <label htmlFor="occupationFilter">Occupation:</label>
        <select
          id="occupationFilter"
          name="occupationFilter"
          value={occupationFilter}
          onChange={handleOccupationFilterChange}
        >
          <option value="">Select Occupation</option>
          {occupations.map((occupation) => (
            <option key={occupation} value={occupation}>
              {occupation}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button onClick={filterData}>Apply Filter</button>
      <button onClick={resetFilter}>Reset Filter</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
