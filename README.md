## React Hooks  
#### useState  
##### set, increment and decrement count with useState:  
```
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0);
  return(
    <>
      <p>count: {count}</p>
      <p><button onClick={() => setCount(count + 1)}>Increment Count</button></p>
      <p><button onClick={() => setCount(count - 1)}>Decrement Count</button></p>
    </>
  )
}

export default App;
```  
#### set, increment and decrement an object attribute in state using useState while preserving the rest of the state  
```
import { useState } from 'react'


const App = () => {
  const [{count1, count2}, setCount] = useState({count1: 10, count2: 20});
  return(
    <>
      <p>count1: {count1}</p>
      <p>count2: {count2}</p>
      <p><button onClick={() => setCount(currentState => ({
        ...currentState, 
        count1: currentState.count1 + 1
        }))}>Increment Count 1</button></p>
      <p><button onClick={() => setCount(currentState => ({
        ...currentState, 
        count1: count1 - 1
        }))}>Decrement Count 1</button></p>
    </>
  )
}

export default App;
```  

#### Handle form field using useState  
```
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
```
#### extract logic in a hook  
App.js
```
import useForm from './useForm';


const App = () => {
  const [values, handleChange] = useForm({email: '', password: ''});

  return(
    <>
      <input 
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <input 
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </>
  )
}
```
useForm.js
```
export default App;


import {useState} from 'react';


const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    return [values, e => (setValues(currentState => ({...currentState,e.target.name:e.target.vaue}))];
}

export default useForm;
```