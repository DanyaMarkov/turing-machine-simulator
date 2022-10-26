import { observer } from "mobx-react-lite";
import css from "./Practice.module.css";

const Practice = observer(() => {
    return (
        <div className={css.machine}>
            <h1>Здесь будут представлены практические задания по работе с машиной Тьюринга</h1>
        </div>
    );
});

export default Practice;
