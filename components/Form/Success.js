const Success = () => {
    return (
        <div className='flex flex-col items-center justify-center sm:flex-row-reverse md:w-3/4 lg:w-1/2'>
            <h1 className='pl-3 text-gray-900 text-4xl font-bold text-center h-full'>Your message has been sent!</h1>
            <Plane />
        </div>
    )
}

function Plane(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        key="100"
        xmlns="http://www.w3.org/2000/svg"
        className="transform rotate-45 sm:rotate-90 w-40 h-40"
      >
        <path
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          fill="#FBBF24"
          stroke="#111827"
          strokeWidth="2"
          />
        </svg>
    )
  }

export default Success
