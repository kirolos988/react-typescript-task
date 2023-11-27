import { createTheme } from '@mui/material/styles';

const secondary = {
  main: '#8a74f9',
  contrastText: '#ffffff',
};

// const primary = {
//   main: 'orange',
//   contrastText: 'orange',
// };

const theme = createTheme({
  palette: {
    // primary: primary,
    secondary: secondary,
  },
});

export default theme