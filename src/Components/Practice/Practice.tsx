import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import practice from "../../store/practice";
import PracticeMachine from "../PracticeMachine/PracticeMachine";
import css from "./Practice.module.css";
import cn from "classnames";

const Practice = observer(() => {
    useEffect(() => {
        practice.getCurrentProgress();
    }, []);

    // let progressPercent = (practice.currentProgress / practice.tasks.length) * 100;
    return (
        <div className={css.practice}>
            <div className={cn(css.practice__panel, css.panel)}>
                <>
                    <div className={css.panel__settings}>
                        {/* <div>
                            <h1>Практические задания</h1>
                        </div> */}
                        <div className={cn(css.panel__settings_progress, css.progress)}>
                            <div className={css.progress__title}>Ваш прогресс: </div>
                            {/* <div className={css.progress__indicator}>
                                {practice.currentProgress} из {practice.tasks.length}
                            </div> */}
                            <div className={css.box}>
                                <div className={css.percent}>
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle
                                            // style={{ stroke-dashoffset:`calc(440 - (440 * 30) / 100)`}}
                                            style={{
                                                strokeDashoffset: `calc(440 - (440 * ${
                                                    // practice.currentProgress / practice.tasks.length
                                                    (practice.currentProgress / practice.tasks.length) * 100
                                                }) / 100)`,
                                            }}
                                            cx="70"
                                            cy="70"
                                            r="70"
                                        ></circle>
                                    </svg>
                                    <div className={css.num}>
                                        {/* 87<span>%</span> */}
                                        {practice.currentProgress} из {practice.tasks.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cn(css.practice__panel_progress, css.filters)}>
                            <div className={css.filters__title}>{/* Показать: */}</div>
                            <div className={css.filters__radio}>
                                <div className={css.filters__radio_el}>
                                    <input
                                        defaultChecked={true}
                                        type={"radio"}
                                        name={"filters"}
                                        id={"all"}
                                        value={"Все"}
                                    />
                                    <label>Все</label>
                                </div>
                                <div className={css.filters__radio_el}>
                                    <input type={"radio"} name={"filters"} id={"completed"} value={"Завершённые"} />
                                    <label>Завершённые</label>
                                </div>

                                <div className={css.filters__radio_el}>
                                    <input
                                        type={"radio"}
                                        name={"filters"}
                                        id={"notCompleted"}
                                        value={"Незавершённые"}
                                    />
                                    <label>Незавершённые</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div className={css.panel__tasks}>
                        {practice.tasks.length ? (
                            practice.tasks.map((task) => {
                                return (
                                    <Task
                                        key={task.id}
                                        taskId={task.id}
                                        difficult={task.difficult}
                                        isCompleted={task.isCompleted}
                                        taskText={task.taskText}
                                    />
                                );
                            })
                        ) : (
                            <h2>Задания отсутствуют</h2>
                        )}
                    </div>
                </>
            </div>
            <div className={css.practice__machine}>
                <PracticeMachine />
            </div>
        </div>
    );
});

interface TaskProps {
    taskId: number;
    difficult: string;
    isCompleted: boolean;
    taskText: string;
}

export const Task: React.FC<TaskProps> = ({ taskId, taskText, difficult, isCompleted }) => {
    const handleSetCurrentTask = (taskId: number) => {
        practice.setCurrentTask(taskId);
    };
    return (
        <div className={css.task}>
            <div
                className={
                    difficult === "easy"
                        ? cn(css.taskBody, css.taskBody__difficult_easy)
                        : difficult === "medium"
                        ? cn(css.taskBody, css.taskBody__difficult_medium)
                        : cn(css.taskBody, css.taskBody__difficult_hard)
                }
                onClick={() => handleSetCurrentTask(taskId)}
            >
                <div className={css.taskBody__header}>
                    <div className={css.taskBody__header_title}>
                        <h2>Задание №{taskId}</h2>
                    </div>
                    <div className={css.taskBody__header_diff}>
                        <h3>
                            {difficult === "easy" ? "Лёгкое " : difficult === "medium" ? "Продвинутое " : "Тяжёлое "}
                            задание
                        </h3>
                    </div>
                </div>
            </div>
            <div className={css.task__isCompleted}>
                <div>
                    <input type="checkbox" checked={isCompleted} />
                </div>
            </div>
        </div>
    );
};

export default Practice;
