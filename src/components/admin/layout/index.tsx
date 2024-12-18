import Sidebar from "./sidebar.tsx";
import Content from "./content.tsx";
import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Sidebar />
            <Content><Outlet/></Content>
        </div>
    );
}

export default AdminLayout;