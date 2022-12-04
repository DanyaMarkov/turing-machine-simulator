import cn from "classnames";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import practice from "../../store/practice";
import TuringMachine from "../TuringMachine/TuringMachine";
import css from "./Practice.module.css";

const Practice = observer(() => {
    useEffect(() => {
        practice.getCurrentProgress();
    }, []);

    return (
        <div className={css.practice}>
            <div className={css.practice__settings}>
                <div className={css.practice__settings_title}>
                    <h1>Практические задания</h1>
                </div>
                <div className={cn(css.practice__settings_progress, css.progress)}>
                    <div className={css.progress__title}>Ваш прогресс:</div>
                    <div className={css.progress__indicator}>
                        {practice.currentProgress} из {practice.tasks.length}
                    </div>
                </div>
                <div className={cn(css.practice__settings_progress, css.progress)}>
                    <label>Здесь фильтры</label>
                </div>
                <div className={css.practice__tasks}>
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
            </div>
            <div className={css.practice__tasks}>
                <TuringMachine />
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
