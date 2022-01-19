import React from "react";
import HandleForm from "./HandleForm";

interface Props {
  isFormValidated: () => void
}

const Form: React.FC<Props> = ({ isFormValidated }) => {
  const { handleSubmit, handleChange, inputs, errors } = HandleForm(isFormValidated);

  return (
    <form onSubmit={handleSubmit} className="text-white flex flex-col">
      <h2 className="text-3xl font-bold text-gray-900 pb-6">
        Let&apos;s get in touch!
      </h2>
      <div className="pb-4">
        <input
          type="text"
          value={inputs.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
          className="w-full bg-gray-900 rounded-full pl-4 py-2 sm:w-3/4 md:w-1/2"
        />
        {errors.name && (
          <p className="text-red-600 text-sm font-bold pl-2">{errors.name}</p>
        )}
      </div>

      <div className="pb-4">
        <input
          type="text"
          value={inputs.email}
          onChange={handleChange}
          name="email"
          placeholder="E-mail"
          className="w-full bg-gray-900 rounded-full pl-4 py-2 sm:w-3/4 md:w-1/2"
        />
        {errors.email && (
          <p className="text-red-600 text-sm font-bold pl-2">{errors.email}</p>
        )}
      </div>

      <div className="pb-4">
        <input
          type="text"
          value={inputs.message}
          onChange={handleChange}
          name="message"
          placeholder="Message"
          className="resize-none w-full h-36 bg-gray-900 pr-6 pl-3 pt-2 rounded-lg overflow-y-auto scrollbar scrollbar-thumb-white scrollbar-thumb-rounded-full md:w-3/4"
        />
        {errors.message && (
          <p className="text-red-600 text-sm font-bold pl-2">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        value="Send Message"
        className="w-3/5 h-10 bg-yellow-400 text-gray-900 text-center font-bold rounded-full p-2 cursor-pointer hover:bg-gray-900 hover:text-white sm:w-2/5 md:w-1/5"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
