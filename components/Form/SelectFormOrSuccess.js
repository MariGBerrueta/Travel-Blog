import Form from "./Form"
import { useState } from "react"
import Success from "./Success"
import HandleForm from "./HandleForm"


const SelectFormOrSuccess = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const formSubmit = () => {
        setIsSubmitted(true)
    }

    return (      
        <div>
            {console.log(isSubmitted)}
           {!isSubmitted ? <Form formSubmit={formSubmit} /> : <Success />}
        </div>
    )
}

export default SelectFormOrSuccess
