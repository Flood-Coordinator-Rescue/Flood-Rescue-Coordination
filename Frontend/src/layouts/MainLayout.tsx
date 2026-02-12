import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function MainLayout() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer/>
        </>

    );
}

export default MainLayout;