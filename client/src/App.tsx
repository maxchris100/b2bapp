import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { FaSearch } from "react-icons/fa";
import logo from "./assets/react.svg";


export default function App() {
  return (
    <>

      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <div className="text-2xl font-semibold flex">
              <img src={logo}></img> B2B App
            </div>
          </a>
          <div className="flex items-center border rounded-lg p-2 bg-white">
            <input
              type="text"
              className="px-4 py-2 w-80 outline-none text-black"
              placeholder="Search for products"
            />
            <button className="p-2 bg-blue-500 text-white rounded-lg">
              <FaSearch />
            </button>
          </div>
        </div>

      </header>
      <Outlet />
      <Footer />
    </>
  );
}