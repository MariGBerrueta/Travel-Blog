const validateForm = () => {
  const validateName = (inputs) => {
    if (!inputs.name) {
      return "Name required";
    } else if (inputs.name.length > 30) {
      return "Your name cannot have more than 30 characters";
    }
  };

  const validateEmail = (inputs) => {
    if (!inputs.email) {
      return "E-mail required";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      return "E-mail address is invalid";
    }
  };

  const validateMessage = (inputs) => {
    if (!inputs.message) {
      return "Message required";
    } else if (inputs.message.length > 900) {
      return "Message cannot have more than 900 characters";
    }
  };

  return { validateName, validateEmail, validateMessage };
};

export default validateForm;
