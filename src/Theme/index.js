import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import MainPage from '../Views/Pages/Main';

const getActiveTheme = (themeMode) => {
  console.log('themeMode: ', themeMode)
  return createTheme({
    pageColor: '#F6E6D6',

    bgPrimary: '#F6E6D6',
    bgSecondary: themeMode === 'true' || !themeMode ? 'green': 'red',

    textPrimary: themeMode === 'true' || !themeMode ? '#000000': '#ffffff',
    textSecondary: themeMode === 'true' || !themeMode ? 'white': 'black',

    switchColor: themeMode === 'true' || !themeMode ? '#6c6c6c': '#b1b1b1',
  })
}
const ThemeContainer = () => {
  const currentTheme = useSelector((state) => state.LDTheme.value);
  const [activeTheme, setActiveTheme] = useState(getActiveTheme(currentTheme));

  useEffect(()=>{    
    setActiveTheme(getActiveTheme(currentTheme))
  },[currentTheme]);
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <MainPage toggleTheme='' />
    </ThemeProvider>
  );
}

export default ThemeContainer;