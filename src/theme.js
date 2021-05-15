import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#003dff",
    },
    secondary: {
      main: "#f1f700",
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: "none",
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#E3E9FF",
        borderRadius: 5,
        '&:hover':{
            backgroundColor:'#E3E9FF'
        },
        '&.Mui-focused':{
            backgroundColor:'white'
        }
      },
      underline: {
        border: "1px solid transparent",
        transition:'.3s all',
        "&::before": {
          borderBottom: "none",
        },
        '&::after':{
            display:'none',
        },
        "&:hover": {
          "&::before": {
            border: "none",
          },
        },
        '&.Mui-focused':{
            border:'1px solid #003dff',
        }
      },
    },
    MuiInputLabel:{
        filled:{
            '&.MuiFormLabel-filled ~ .MuiFilledInput-root':{
                backgroundColor:'white',
                border:'1px solid #003dff',
            }
        }
    },
    MuiTypography: {
      h1: {
        color: "#003dff",
      },
      h2: {
        color: "#003dff",
      },
      h3: {
        color: "#003dff",
      },
      h4: {
        color: "#003dff",
      },
      h5: {
        color: "#003dff",
      },
      h6: {
        color: "#003dff",
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiTextField: {
      variant: "filled",
    },
  },
});
