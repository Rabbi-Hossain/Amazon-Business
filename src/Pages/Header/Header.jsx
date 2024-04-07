import { NavLink } from "react-router-dom";

const Header = () => {

    

    return (
        <div className="shadow-lg p-6">
            <nav className="flex items-center justify-between mx-10">
                <div>
                    <h2 className="text-3xl font-bold">Amazon</h2>
                </div>
                <ul className="flex gap-5">


                <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400": ""
              }
            >
              Home
            </NavLink>

            

            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Dashboard
            </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;