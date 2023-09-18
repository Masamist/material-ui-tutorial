import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useHistory } from 'react-router-dom'




//import { styled, createTheme, ThemeProvider } from '@mui/system'

// const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: 'red',
//       contrastText: 'white',
//     },
//   },
// });
// const MyThemeComponent = styled('div')(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius,
// }));

export default function Create() {
  //const classes =useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title===''){
      setTitleError(true)
    }
    if(details===''){
      setDetailsError(true)
    }

    if(title && details) {
      fetch('http://localhost:8000/notes', {
        method:'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => history.push('/'))
    }
  }
  return (
    <Container>
      <Typography
        varient="h5"
        color="secondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
        onChange={(e) => setTitle(e.target.value)}
        label="Note Title"
        variant="outlined"
        color="secondary"
        margin="normal"
        size="small"
        fullWidth
        required
        error={titleError}
        />
        <TextField
        onChange={(e) => setDetails(e.target.value)}
        label="Details"
        variant="outlined"
        color="secondary"
        multiline
        rows={4}
        margin="normal"
        size="small"
        fullWidth
        required
        error={detailsError}
        />
        <FormControl>   
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label='Money' />
            <FormControlLabel value="todos" control={<Radio />} label='Todos' />
            <FormControlLabel value="reminders" control={<Radio />} label='Reminders' />
            <FormControlLabel value="work" control={<Radio />} label='Work' />
          </RadioGroup>
        </FormControl>
        
        <Button
        type="submit"
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      </form>
      {/* <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Styled div with theme</MyThemeComponent>
    </ThemeProvider> */}
      
      
      {/* icons */}
      {/* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color='secondary' fontSize='large' />
      <AcUnitOutlinedIcon color='secondary' fontSize='small' />
      <AcUnitOutlinedIcon color='action' fontSize='small' />
      <AcUnitOutlinedIcon color='error' fontSize='small' />
      <AcUnitOutlinedIcon color='disabled' fontSize='small' /> */}
    </Container>
  )
}
