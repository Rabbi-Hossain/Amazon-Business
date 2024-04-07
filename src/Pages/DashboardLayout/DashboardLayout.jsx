import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex  container mx-auto mt-10">

            <div className="w-20%">
                <ul>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/editprofile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            EaditProfile
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="w-80% ml-12">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashboardLayout;