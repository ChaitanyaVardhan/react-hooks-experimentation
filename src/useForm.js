import {useState} from 'react';


const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    return [values, e => (setValues(currentState => ({...currentState,e.target.name:e.target.vaue}))];
}

export default useForm;