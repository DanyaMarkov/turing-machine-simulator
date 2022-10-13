import css from "./Header.module.css";

import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const Header = observer(() => {

    // let isActive: boolean = false;

    // const isActive: any;
    // const setActive: any = ({ isActive }) => (isActive ? css.header__activeLink : null);


    return (
        <header className={css.header}>
            <div className={css.logo}>машина тьюринга</div>
            <div  className={css.menu}>
                <div className={css.menu__el}>
                        {/* <NavLink to="/userManagement" className={setActive}> */}
                        <NavLink to="/">
                            главная
                        </NavLink>
                    </div>
                
                    <div className={css.menu__el}>
                        {/* <NavLink to="/userManagement" className={setActive}> */}
                        <NavLink to="/app">
                            симулятор машины Тьюринга
                        </NavLink>
                    </div>
                
            </div>
        </header>
    );
});

export default Header;
