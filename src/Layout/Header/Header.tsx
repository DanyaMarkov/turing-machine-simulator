import css from "./Header.module.css";

import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const Header = observer(() => {
    const setActive = ({ isActive }: any) => (isActive ? css.menu__el_activeLink : "");

    return (
        <header className={css.header}>
            <div className={css.logo}>
                <NavLink to="/turing-machine-simulator">машина тьюринга</NavLink>
            </div>
            <div className={css.menu}>
                <div className={css.menu__el}>
                    <NavLink to="turing-machine-simulator/app" className={setActive}>
                        симулятор
                    </NavLink>
                </div>
                <div className={css.menu__el}>
                    <NavLink to="turing-machine-simulator/training" className={setActive}>
                        обучение
                    </NavLink>
                </div>
                <div className={css.menu__el}>
                    <NavLink to="turing-machine-simulator/practice" className={setActive}>
                        практические задания
                    </NavLink>
                </div>
            </div>
        </header>
    );
});

export default Header;
