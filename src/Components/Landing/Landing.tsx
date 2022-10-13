import { observer } from "mobx-react-lite";
import css from "./Landing.module.css";
import machine from "../../assets/machine.png"

const Landing = observer(() => {
    return (
        <div className={css.landing}>
            <div className={css.about}> 
                <div className={css.about__info}>
                    <div className={css.about__title}> Для чего это? </div>
                    <div className={css.about__text}> это учебная модель универсального исполнителя (абстрактной вычислительной машины), предложенного в 1936 году А. Тьюрингом для уточнения понятия алгоритма. Согласно тезису Тьюринга, любой алгоритм может быть записан в виде программы для машины Тьюринга. </div>
                    <div className={css.about__button}> попробовать </div>
                </div>
                <div className={css.about__picture}>
                    <img src={machine} alt="машина тьюринга"/>
                </div>
            </div>
     
        </div>
    );
});

export default Landing;
