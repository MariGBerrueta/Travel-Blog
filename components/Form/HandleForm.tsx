import { useState, useEffect } from "react";
import validateForm from "./ValidateForm";

interface LogicValues {
  inputs: {
    name: string;
    email: string;
    message: string;
  }
  errors: {
    name: string;
    email: string;
    message: string;
  }
  handleSubmit: (e: React.SyntheticEvent<Element, Event>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function HandleForm(isFormValidated: () => void): LogicValues {
  const { validateName, validateEmail, validateMessage } = validateForm();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false);

  function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function handleSubmit (e: React.SyntheticEvent): void {
    e.preventDefault();

    setErrors({
      name: validateName(inputs),
      email: validateEmail(inputs),
      message: validateMessage(inputs),
    });

    setIsSubmiting(true);
  };

  useEffect(() => {
    if (
      isSubmiting &&
      errors.name == "" &&
      errors.email == "" &&
      errors.message == ""
    ) {
      isFormValidated();

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
        }
      });
    }
  }, [errors, isFormValidated, isSubmiting, inputs]);

  return { handleChange, handleSubmit, inputs, errors };
}

export default HandleForm;
