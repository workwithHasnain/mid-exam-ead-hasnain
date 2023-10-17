import React, { useState } from 'react';
import './App.css';

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

function App() {
  const [nameFilter, setNameFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
    filterData(event.target.value, ageFilter);
  };

  const handleAgeFilterChange = (event) => {
    setAgeFilter(event.target.value);
    filterData(nameFilter, event.target.value);
  };

  const filterData = (name, age) => {
    const filteredData = data.filter((item) => {
      if (name && age) {
        return (
          item.name.toLowerCase().includes(name.toLowerCase()) &&
          item.age.toString().includes(age)
        );
      } else if (name) {
        return item.name.toLowerCase().includes(name.toLowerCase());
      } else if (age) {
        return item.age.toString().includes(age);
      } else {
        return true;
      }
    });
    setFilteredData(filteredData);
  };

  return (
    <div>
      <div>
        <label htmlFor="nameFilter">Name:</label>
        <input
          type="text"
          id="nameFilter"
          name="nameFilter"
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
      </div>
      <div>
        <label htmlFor="ageFilter">Age:</label>
        <input
          type="text"
          id="ageFilter"
          name="ageFilter"
          value={ageFilter}
          onChange={handleAgeFilterChange}
        />
      </div>
      <button onClick={() => filterData(nameFilter, ageFilter)}>Apply Filter</button>
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
