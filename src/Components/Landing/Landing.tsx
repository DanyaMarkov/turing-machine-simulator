import { observer } from "mobx-react-lite";
import css from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = observer(() => {
    const navigate = useNavigate();
    return (
        <div className={css.landing}>
            <div className={css.about}>
                <div className={css.about__picture}>{/* <img src={machine} alt="машина тьюринга" /> */}</div>
                <div className={css.about__info}>
                    <div className={css.about__title}>
                        <h1> Для чего это?</h1>{" "}
                    </div>
                    <div className={css.about__text}>
                        это учебная модель универсального исполнителя (абстрактной вычислительной машины), предложенного
                        в 1936 году А. Тьюрингом для уточнения понятия алгоритма. Согласно тезису Тьюринга, любой
                        алгоритм может быть записан в виде программы для машины Тьюринга.{" "}
                    </div>
                    <div onClick={() => navigate("/app")} className={css.about__button}>
                        попробовать
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Landing;
