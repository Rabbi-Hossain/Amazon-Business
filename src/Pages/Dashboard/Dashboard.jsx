import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
           <h3>dashboard layout session</h3>
           <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;