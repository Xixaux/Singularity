'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CloudIcon from '@mui/icons-material/Cloud';

// Define the shape of the weather data
interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherWidget: React.FC = () => {
  const [city, setCity] = useState<string>('London');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchWeatherData = async (cityName: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found or API error');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please check the city name.');
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherData(city);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        sx={{
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          p: 3,
          backgroundColor: 'theme.vars.palette.background.default',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" className="font-bold mb-2">
          Weather Widget
        </Typography>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <TextField
            label="Enter city"
            variant="outlined"
            size="small"
            value={city}
            onChange={handleCityChange}
            sx={{ flexGrow: 1 }}
          />
          <Button variant="contained" type="submit" disabled={isLoading}>
            Search
          </Button>
        </form>
        {isLoading && (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="100px">
            <CircularProgress />
          </Box>
        )}
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        {weatherData && !isLoading && !error && (
          <Box>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon sx={{ fontSize: 20, mr: 1 }} />
              <Typography variant="body1" fontWeight="medium">
                {weatherData.name}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <DeviceThermostatIcon sx={{ fontSize: 20, mr: 1 }} />
              <Typography variant="body1">
                {Math.round(weatherData.main.temp)}°C
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <CloudIcon sx={{ fontSize: 20, mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {weatherData.weather[0].description}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Feels like: {Math.round(weatherData.main.feels_like)}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {weatherData.main.humidity}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wind: {weatherData.wind.speed} m/s
            </Typography>
          </Box>
        )}
      </Paper>
    </motion.div>
  );
};

export default WeatherWidget;