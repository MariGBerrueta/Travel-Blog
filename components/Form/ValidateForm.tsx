interface Inputs {
    name: string;
    email: string;
    message: string;
}

interface Validations {
  validateName: (inputs: Inputs) => string
  validateEmail: (inputs: Inputs) => string
  validateMessage: (inputs: Inputs) => string
}

function validateForm (): Validations {
  const validateName = (inputs: Inputs): string => {
    if (!inputs.name) {
      return "Name required";
    } else if (inputs.name.length > 30) {
      return "Your name cannot have more than 30 characters";
    }
    return ""
  };

  const validateEmail = (inputs: Inputs): string => {
    if (!inputs.email) {
      return "E-mail required";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      return "E-mail address is invalid";
    }
    return ""
  };

  const validateMessage = (inputs: Inputs): string => {
    if (!inputs.message) {
      return "Message required";
    } else if (inputs.message.length > 900) {
      return "Message cannot have more than 900 characters";
    }
    return ""
  };

  return { validateName, validateEmail, validateMessage };
};

export default validateForm;
