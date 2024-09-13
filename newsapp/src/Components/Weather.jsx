import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState("San Francisco");
  const [showWeather, setShowWeather] = useState(false); // State to control visibility

  const API_KEY = "9d2e326dfd9c6e6ee75fe59fc8df7424";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`;

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setShowWeather(true); // Show Weather component after fetching data
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  return (
    <div
      style={{
        fontSize: "1em",
        color: "#333",
        fontFamily: "Times New Roman, serif",
        width: "35%",
      }}
    >
      <div
        style={{
          fontSize: "1em",
          color: "#333",
          fontFamily: "Arial, sans-serif",
          width: "10%",
        }}
      >
        <div style={searchContainerStyle}>
          <label htmlFor="cityInput" style={labelStyle}>
            Search City:{" "}
          </label>
          <input
            type="text"
            id="cityInput"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleSearch} style={buttonStyle}>
            Search
          </button>
        </div>
      </div>
      {loading && <div>Loading...</div>}
      {showWeather && weatherData && (
        <div
          style={{
            display: "flex",
            width: "70%",
            fontFamily: "Arial, sans-serif",
            border: "1px solid #d6338433",
            borderRadius: "5px",
            padding: "2px",
            marginTop: "10px",
            paddingBottom: "2px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginLeft: "50px",
            textAlign: "center",
          }}
        >
          <p>
            Temperature: {Math.round(weatherData.main.temp - 273.15)} &#8451; |
            Humidity: {weatherData.main.humidity}%
          </p>
        </div>
      )}
    </div>
  );
};

const searchContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "0px",
};

const labelStyle = {
  marginRight: "10px",
  fontWeight: "bold",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginRight: "10px",
  width: "200px",
  fontSize: "1em",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
};

const buttonStyle = {
  padding: "8px 16px",
  borderRadius: "4px",
  backgroundColor: "#4CAF50",
  color: "white",
  cursor: "pointer",
  border: "none",
  fontSize: "1em",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
};

export default Weather;
