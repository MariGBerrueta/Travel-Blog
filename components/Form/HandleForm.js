import { useState, useEffect } from 'react';
import validateForm from './ValidateForm';


function HandleForm(callback) {
    const {validateName, validateEmail, validateMessage} = validateForm()

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: null,
        email: null,
        message: null, 
    })

    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value          
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({
            name: validateName(inputs),
            email: validateEmail(inputs),
            message: validateMessage(inputs)
        });

        setIsSubmiting(true)

    }


    useEffect(() => {
        if (isSubmiting && errors.name == null && errors.email == null && errors.message == null) {
            callback();

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
              })
              .then((res) => {
                    console.log('Response received')
                    if (res.status === 200) {
                    console.log('Response succeeded!')
                    }
            })
            
        }
    }, [errors])
    
    return { handleChange, handleSubmit, inputs, errors}
  
}

export default HandleForm
