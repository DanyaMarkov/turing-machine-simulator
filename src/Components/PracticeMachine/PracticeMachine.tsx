import cn from "classnames";
import { useState } from "react";
import practice from "../../store/practice";
import TableOfStates from "../TableOfStates/TableOfStates";
import css from "./PracticeMachine.module.css";

interface cellForChange {
    id: number;
    value: string;
}

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

    const editCell = (cell: cellForChange) => {
        practice.editCell(cell.id);
        setCurrEditedCell(cell.value);
    };

    const [currEditedCell, setCurrEditedCell] = useState("");
    const editCellValue = (value: string) => {
        if (value.length > 1 || !practice.alphabet.includes(value)) {
            return false;
        }
        setCurrEditedCell(value);
    };

    const saveCellValue = (cell: cellForChange) => {
        practice.editCellValue(cell.value);
        practice.editCell(10000000);
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
                                    <>
                                        {cell.id === practice.currentCell ? (
                                            <div className={css.currCell} key={cell.id}>
                                                {practice.currEditedCell === cell.id ? (
                                                    <input
                                                        className={css.inputEditCell}
                                                        type={"text"}
                                                        onChange={(e) => editCellValue(e.target.value)}
                                                        value={currEditedCell}
                                                        onBlur={(e) =>
                                                            saveCellValue({
                                                                id: practice.currEditedCell,
                                                                value: e.target.value,
                                                            })
                                                        }
                                                    />
                                                ) : (
                                                    cell.value
                                                )}
                                            </div>
                                        ) : (
                                            <div
                                                className={css.cell}
                                                key={cell.id}
                                                onDoubleClick={() => editCell({ id: cell.id, value: cell.value })}
                                            >
                                                {practice.currEditedCell === cell.id ? (
                                                    <input
                                                        className={css.inputEditCell}
                                                        type={"text"}
                                                        onChange={(e) => editCellValue(e.target.value)}
                                                        value={currEditedCell}
                                                        onBlur={(e) =>
                                                            saveCellValue({
                                                                id: practice.currEditedCell,
                                                                value: e.target.value,
                                                            })
                                                        }
                                                    />
                                                ) : (
                                                    cell.value
                                                )}
                                            </div>
                                        )}
                                    </>
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

                    {/* Таблица состояний */}
                    <TableOfStates />
                </div>
            </div>
        </div>
    );
};

export default PracticeMachine;
