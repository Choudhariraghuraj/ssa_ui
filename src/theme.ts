// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#cd8500',           // Main saffron-orange
      contrastText: '#ffffff',
    },
    background: {
      default: '#2b1b00',        // Deep earthy orange (background)
      paper: '#3b2400',          // Slightly lighter for cards, modals
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffcc80',
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          backgroundColor: '#cd8500',
          '&:hover': {
            backgroundColor: '#e59400',
            boxShadow: '0 0 10px rgba(255, 191, 0, 0.5)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#3b2400',
          borderRadius: '0.5rem',
          '& .MuiInputBase-input': {
            color: '#fff',
          },
          '& .MuiInputLabel-root': {
            color: '#ffcc80',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#cd8500',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#3b2400',
          color: '#fff',
          borderRadius: '1rem',
        },
      },
    },
  },
});

export default theme;
