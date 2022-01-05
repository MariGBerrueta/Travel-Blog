import { useState } from "react"
import Success from "./Success"
import Form from "./Form"

const SelectFormOrSuccess = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    const formSubmit = () => {
        setIsSubmitted(true)
    }

    return (
        <div>
           {!isSubmitted ? <Form formSubmit={formSubmit} /> : <Success />}
        </div>
    )
}

export default SelectFormOrSuccess
