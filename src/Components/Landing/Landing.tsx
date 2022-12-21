import { observer } from "mobx-react-lite";
import css from "./Landing.module.css";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import algorithm from "../../assets/algorithm.png";
import computingMachine from "../../assets/computingMachine.png";
import task from "../../assets/task.png";
import landing from "../../store/landing";

import webFormat from "../../assets/webFormat.jpg";
import settings from "../../assets/settings.png";
import tutorial from "../../assets/tutorial.png";
import tasks from "../../assets/tasks.png";

const Landing = observer(() => {
    const navigate = useNavigate();

    const setActiveRewiewer = (id: number) => {
        landing.setActiveRewiwer(id);
    };

    const getStars = (rating: number) => {
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += "★";
        }
        return stars;
    };

    return (
        <div className={css.landing}>
            <div className={css.about}>
                <div className={css.about__picture}>{/* <img src={machine} alt="машина тьюринга" /> */}</div>
                <div className={css.about__info}>
                    <div className={css.about__title}>
                        <h1> Что это такое?</h1>{" "}
                    </div>
                    <div className={css.about__text}>
                        это учебная модель универсального исполнителя (абстрактной вычислительной машины), предложенного
                        в 1936 году А. Тьюрингом для уточнения понятия алгоритма. Согласно тезису Тьюринга, любой
                        алгоритм может быть записан в виде программы для машины Тьюринга.{" "}
                    </div>
                    <div onClick={() => navigate("app")} className={css.about__button}>
                        попробовать
                    </div>
                </div>
            </div>
            <div className={css.utility}>
                <div className={css.utility__header}>Зачем это нужно?</div>
                <div className={css.utility__content}>
                    <div className={cn(css.utility__content_el1, css.reason)}>
                        <div className={css.reason__title}>Познать понятие "алгоритм"</div>
                        <div className={css.reason__text}>
                            Алгоритм - онечная совокупность точно заданных правил решения некоторого класса задач или
                            набор инструкций, описывающих порядок действий исполнителя для решения определённой задачи.
                            Понимание принципа алгоритма делает вас очень умным.
                        </div>
                        <div className={css.reason__icon}>
                            <img src={algorithm} alt="алгоритм" />
                        </div>
                    </div>
                    <div className={cn(css.utility__content_el2, css.reason)}>
                        <div className={css.reason__title}> Теоретически понять работу вычислительных машин</div>
                        <div className={css.reason__text}>
                            Вычислительная маши́на, счётная машиина — механизм, электромеханическое или электронное
                            устройство, предназначенное для автоматического выполнения математических операций. В
                            последнее время это понятие чаще всего ассоциируется с различными видами компьютерных
                            систем. Тем не менее вычислительные механизмы появились задолго до того, как заработал
                            первый компьютер.
                        </div>
                        <div className={css.reason__icon}>
                            <img src={computingMachine} alt="вычислительная машина" />
                        </div>
                    </div>
                    <div className={cn(css.utility__content_el3, css.reason)}>
                        <div className={css.reason__title}> Научиться решать алгоритмические задачи</div>
                        <div className={css.reason__text}>
                            Знание алгоритмов помогает писать более эффективный код, правильно выстраивать архитектуру
                            проекта и отдельных модулей, а также отсеивать операции, ненужные для решения задачи.
                            Математический склад ума очень ценен в наше время
                        </div>
                        <div className={css.reason__icon}>
                            <img src={task} alt="алгоритмическая задача" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.advanteges}>
                <div className={css.circle}></div>
                <div className={css.advanteges__header}>Почему мы?</div>
                <div className={css.advanteges__content}>
                    <div className={cn(css.advanteges__content_el1, css.benefit)}>
                        <div className={css.benefit__title}> Онлайн решение</div>
                        <div className={css.benefit__picture}>
                            <img src={webFormat} alt="преимущество" />
                        </div>
                        <div className={css.benefit__text}> Работайте с машиной Тьюринга прямо в браузере</div>
                    </div>
                    <div className={cn(css.advanteges__content_el2, css.benefit)}>
                        <div className={css.benefit__title}> Гибкая настройка </div>
                        <div className={css.benefit__picture}>
                            <img src={settings} alt="преимущество" />
                        </div>
                        <div className={css.benefit__text}>
                            Вписывайте любые значения, редактируйте доступный алфавит, задавайте бесконечное количество
                            возможных состояний
                        </div>
                    </div>
                    <div className={cn(css.advanteges__content_el3, css.benefit)}>
                        <div className={css.benefit__title}> Обучение</div>
                        <div className={css.benefit__picture}>
                            <img src={tutorial} alt="преимущество" />
                        </div>
                        <div className={css.benefit__text}>
                            Мы предоставляем теоретическую базу по работе с алгоритмической машиной
                        </div>
                    </div>
                    <div className={cn(css.advanteges__content_el4, css.benefit)}>
                        <div className={css.benefit__title}>Практические задания</div>
                        <div className={css.benefit__picture}>
                            <img src={tasks} alt="преимущество" />
                        </div>
                        <div className={css.benefit__text}>
                            Потренируйтесь в обращении с машиной Тьюринга в специально подготовленных заданиях!
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.reviews}>
                <div className={css.reviews__header}>Как о нас отзываются?</div>
                <div className={css.reviews__content}>
                    <div className={cn(css.reviews__content_reviewers, css.reviewers)}>
                        {landing.reviewers.map((reviewer, index) => {
                            return reviewer.id === landing.currentReviewer ? (
                                <div key={reviewer.id} className={css.reviewers__activeEl}>
                                    <div
                                        className={css.reviewers__activeEl_img}
                                        style={{ backgroundImage: `url(${reviewer.avatar})` }}
                                    ></div>
                                    <div className={css.reviewers__activeEl_name}>{reviewer.name}</div>
                                </div>
                            ) : (
                                <div
                                    key={reviewer.id}
                                    className={css.reviewers__el}
                                    onClick={() => setActiveRewiewer(reviewer.id)}
                                >
                                    <div
                                        className={css.reviewers__el_img}
                                        style={{ backgroundImage: `url(${reviewer.avatar})` }}
                                    ></div>
                                    <div className={css.reviewers__el_name}>{reviewer.name}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cn(css.reviews__content_feedback, css.feedback)}>
                        <div
                            className={css.feedback__avatar}
                            style={{ backgroundImage: `url(${landing.reviewers[landing.currentReviewer].avatar})` }}
                        ></div>
                        <div className={css.feedback__name}>
                            {landing.reviewers[landing.currentReviewer].name}
                            <div className={css.stars}>
                                {getStars(landing.reviewers[landing.currentReviewer].rating)}
                            </div>
                            {/* <div className={css.stars}>★★★★★</div> */}
                        </div>
                        <div className={css.feedback__title}>Отзыв:</div>
                        <div className={css.feedback__text}>{landing.reviewers[landing.currentReviewer].text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Landing;
