import React, { useState } from "react";
import Success from "./Success";
import Form from "./Form";

const SelectFormOrSuccess: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValidated = (): void => {
    setIsSubmitted(true)
  }

  return (
    <div>{!isSubmitted ? <Form isFormValidated={isFormValidated} /> : <Success />}</div>
  );
};

export default SelectFormOrSuccess;
