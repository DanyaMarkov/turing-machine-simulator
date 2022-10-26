import { observer } from "mobx-react-lite";
import css from "./Training.module.css";

const Training = observer(() => {
    return (
        <div className={css.machine}>
            <h1>Здесь будут представлены обучающие материалы по работе с машиной Тьюринга</h1>
        </div>
    );
});

export default Training;
