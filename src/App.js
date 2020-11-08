import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #EB3349, #F45C43)',
    border: 0,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
    padding: '10px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 36
    }
  },
  palette: {
    primary: {
      main: orange[900],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Custom Styled Button</Button>
}


function CheckboxComp1() {
  const [checked, setChecked] = React.useState(false);
  // useState is a hook to manipulate the state of a component
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{'aria-label': 'Checkbox Form Control Label'}} />
      }
      label="Testing Iconed Checkbox" />
  )
}

function CheckboxComp2() {
  const [checked, setChecked] = React.useState(true);
  // useState is a hook to manipulate the state of a component
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{'aria-label': 'Checkbox Form Control Label'}} />
      }
      label="Testing Default Checkbox" />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <header className="App-header">
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Typography
          variant="h3"
          >Welcome to MUI</Typography>
        <Typography
          variant="h6"
          component="div"
          >Beautiful Material Design</Typography>
        <ButtonStyled />
        <TextField className="Text-input"
          variant="outlined"
          label="Text Input Box"
          color="secondary" />
        <TextField className="Date-input"
          variant="outlined"
          color="secondary"
          type="date" />
        <TextField className="Time-input"
          variant="outlined"
          color="secondary"
          type="time" />
        <CheckboxComp1 />
        <CheckboxComp2 />
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            href="#"
            onClick={() => alert('Saved!')}
            variant="contained"
            color="primary"
            size="large"
            style={
              {fontSize: 18}
            }>
              Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            href="#"
            onClick={() => alert('Deleted')}
            variant="contained"
            color="secondary"
            size="large"
            style={
              {fontSize: 18}
            }>
              Delete
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
