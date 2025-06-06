import { Contact } from "./components/Contact";
import { AboutUs } from "./components/AboutUs"

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
      
      <AboutUs />
      
      <Contact />
    </div>
  );
}
