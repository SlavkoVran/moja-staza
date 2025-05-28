import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-red-400">Home page</h1>
      </main>
      

 <nav className="bg-background p-6 shadow w-full fixed top-0 left-0 right-0">
        <ul className="flex justify-center mr-5 ml-5">
          <li className="text-white hover:text-blue-300 mr-12">
            Home
          </li>
          <li className="text-white hover:text-blue-300 mr-12">
            About Us
          </li>
          <li className="text-white hover:text-blue-300">
            Contact
          </li>
        </ul>
      </nav>

    </div>
  );
}

