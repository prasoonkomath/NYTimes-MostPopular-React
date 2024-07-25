import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Root() {
    return (
        <main>
            <ScrollRestoration></ScrollRestoration>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
}

export default Root;