import cn from "classnames";
import { useState } from "react";
import practice from "../../store/practice";
import PracticeTable from "../PracticeTable/PracticeTable";
import css from "./PracticeMachine.module.css";

const PracticeMachine: React.FC = () => {
    //Сделать 1 шаг
    const makeOneStep = () => {
        return practice.makeStep();
    };

    //Сбросить настройки машины до первоначальных
    const resetMachine = () => {
        // machine.alphabet = "01";
        practice.reset();
        // formikSetAlphabet.values.alphabet = "01";
    };

    //Запуск/остановка работы машины
    const [currentMachineStatus, setMachineStatus] = useState(0);
    const handleStartStopMachine = () => {
        if (currentMachineStatus) {
            clearInterval(currentMachineStatus);
            setMachineStatus(0);
            return;
        }

        const newIntervalId: any = setInterval(() => {
            let isRun = makeOneStep();
            // let d = machine.makeStep();
            if (!isRun) {
                clearInterval(newIntervalId);
                clearInterval(currentMachineStatus);
                setMachineStatus(0);
            }
        }, 1000);
        setMachineStatus(newIntervalId);
    };

    return (
        <div className={css.machine}>
            <div className={cn(css.machine__panel, css.panel)}>
                <div className={css.panel__el}>
                    <p>
                        <b> Задание: </b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio
                        accusantium temporibus labore autem ad fugit explicabo recusandae molestias commodi molestiae
                    </p>
                </div>
                <div className={css.panel__el}>
                    <button className={css.panel__button} onClick={() => resetMachine()}>
                        Сбросить
                    </button>
                    {/* <button className={css.panel__button} onClick={makeOneStep}>
                        Запустить
                    </button> */}
                    <button
                        className={css.panel__button}
                        onClick={() => {
                            handleStartStopMachine();
                        }}
                    >
                        {currentMachineStatus ? <> Остановить</> : <> Запустить</>}
                    </button>
                </div>
            </div>
            <div className={css.machine__body}>
                <div className={css.functional}>
                    <div className={css.tape}>
                        <div className={css.tape__cells}>
                            {practice.currentCells.map((cell) => {
                                return (
                                    <div className={css.cell} key={cell.id}>
                                        {cell.value}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Текущее состояние */}
                    <div className={css.currentState}>{practice.currentState}</div>

                    {/* Алфавит */}
                    <div className={css.alphabet}>
                        <div className={css.alphabet__title}>Алфавит:</div>
                        <div className={css.alphabet__values}>
                            <input placeholder={"01"} id="alphabet" value="01" type="text" readOnly={true} />
                        </div>
                    </div>

                    {/* Таблица переходов */}
                    <PracticeTable />
                </div>
            </div>
        </div>
    );
};

export default PracticeMachine;
