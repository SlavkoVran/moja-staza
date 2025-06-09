export function Contact() {
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="max-w-sm mx-auto shadow-2xl p-5 mb-20" id="contact">
        <h1 className="text-center font-bold font mb-3 text-lg">Contact</h1>
        <div className="mb-5">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-black"
          >
            First Name
          </label>
          <input
            type="text"
            id="large-input"
            placeholder="Enter your First Name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-black"
          >
            Last Name
          </label>
          <input
            type="text"
            id="large-input"
            placeholder="Enter your Last Name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your e-mail"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
          ></input>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            We’ll never share your details. Read our{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="mb-5">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-black"
          >
            Message
          </label>
          <input
            type="text"
            id="large-input"
            placeholder="Enter your message"
            className="block w-full p-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
          ></input>
        </div>
        <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}
