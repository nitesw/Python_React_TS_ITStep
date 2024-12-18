import Header from "./header.tsx";
import Footer from "./footer.tsx";
import {Outlet} from "react-router-dom";
import Content from "./content.tsx";

const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <Content><Outlet/></Content>
            <Footer/>
        </div>
    )
}

export default Layout;