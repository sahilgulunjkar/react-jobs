import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <span className="text-lg font-bold">React Jobs</span>
        </div>

        <div className="flex gap-6 items-center">

          <NavLink
            to="/"
            className={({ isActive }) =>`hover:underline ${isActive ? "underline font-bold" : ""}`}>
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `hover:underline ${isActive ? "underline font-bold" : ""}`}>
            Jobs
          </NavLink>

          <NavLink
            to="/get-started"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
            Get Started
          </NavLink>

        </div>
      </div>
    </nav>
  );
}
