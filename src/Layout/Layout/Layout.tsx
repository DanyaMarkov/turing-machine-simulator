import css from "./Layout.module.css";

import { observer } from "mobx-react-lite";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = observer(() => {
    return (
        <div className={css.layout}>
            <Header />

            <main className={css.main}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
});

export default Layout;
