import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[300],
    },
    primary: {
      main: "#4a148c",
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          elevation: 0,
        },
      },
    },
  },
});
