export default function HomePage() {
  return (
    <div>
      <main className={`pt-32`}></main>

      <header className="bg-background p-3 pb-6 shadow w-full fixed top-0 left-0 right-0 z-50">
        <div className="relative mx-auto flex max-w-screen-lg flex-col sm:flex-row sm:items-center sm:justify-end">
          {/* Hamburger dugme */}
          <input className="peer hidden" type="checkbox" id="navbar-toggle" />
          <label
            htmlFor="navbar-toggle"
            className="absolute right-4 top-0 cursor-pointer text-white text-2xl sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </label>

          <nav className="peer-checked:block hidden sm:block mt-4 sm:mt-0 w-full sm:w-auto text-right sm:text-right">
            <ul className="flex flex-col sm:flex-row mt-4 sm:space-x-10 text-white text-lg">
              <li className="hover:text-orange-700 active">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-orange-700">
                <a href="#about_us">About Us</a>
              </li>
              <li className="hover:text-orange-700">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* @Uros ovde ubaci komponentu About Us */}
      <div id="about_us">
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae obcaecati, laborum dicta cupiditate accusantium
                    dolore doloribus aut repudiandae nihil dignissimos impedit
                    earum molestiae modi sint? Ipsum earum aliquid quisquam
                    facilis.
                  </p>
                </div>
              </div>
              <img
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1717751272.png"
                alt="about Us image"
              />
            </div>
          </div>
        </section>
      </div>
      {/* @Uros ovde ubaci komponentu Kontakt */}
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
