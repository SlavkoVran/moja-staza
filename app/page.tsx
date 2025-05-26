import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-red-400">Home page</h1>
      </main>
      

 <nav className="bg-gray-400 p-14 shadow w-full fixed top-0 left-0 right-0"  style={{ padding: "20px 40px" }}>
        <ul className="flex justify-center" style={{ marginLeft: "20px", marginRight: "20px" }}>
          <li className="text-white hover:text-blue-300" style={{ marginRight: "50px" }}>
            Home
          </li>
          <li className="text-white hover:text-blue-300" style={{ marginRight: "50px" }}>
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

