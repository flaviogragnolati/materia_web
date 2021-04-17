import React from 'react';
//Routes
import AppRoutes from 'routes';

//Custom Components
import Navbar from 'components/Navbar';
import ThemeWrapper from 'context/styles';

//Custom Hooks and Funcs
import { useThemeMode } from 'context/styles/useThemeMode';

function App() {
  //* vvvvvvvvvv THEME MANAGEMENT vvvvvvvvvv
  const [theme, toggleTheme] = useThemeMode();
  //* ^^^^^^^^^^^ THEME MANAGEMENT ^^^^^^^^^^^

  return (
    <ThemeWrapper theme={theme}>
      <Navbar />
      <AppRoutes />
    </ThemeWrapper>
  );
}

export default App;
