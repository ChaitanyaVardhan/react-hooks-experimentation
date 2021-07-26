import {useState} from 'react'

const App = () => {
  const [formValues, setFormValues] = useState({'email': '', 'password': ''});

  return(
    <>
      <input 
        name='email'
        type='text'
        value={formValues.email}
        onChange={e => setFormValues(currentState => ({
          ...currentState,
          [e.target.name]: e.target.value
        }))}
      />
      <input 
        name='password'
        type='password'
        value={formValues.password}
        onChange={e => setFormValues(currentState => ({
          ...currentState,
          [e.target.name]: e.target.value
        }))}
      />
      <p>{formValues.email}</p>
      <p>{formValues.password}</p>
    </>
  )
}

export default App;