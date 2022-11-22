import { observer } from "mobx-react-lite";
import { useState } from "react";
import machine from "../../store/machine";
import Alphabet from "../Alphabet/Alphabet";
import TableOfStates from "../TableOfStates/TableOfStates";
import css from "./TuringMachine.module.css";
// import arrowNext from "../../assets/arrowNext.png";

interface cellForChange {
    id: number;
    value: string;
}
const TuringMachine = observer(() => {
    //Форма изменения внутреннего алфавита

    //Сделать 1 шаг
    const makeOneStep = () => {
        return machine.makeStep();
    };

    //Сбросить настройки машины до первоначальных
    const resetMachine = () => {
        // machine.alphabet = "01";
        machine.reset();
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
        machine.editCell(cell.id);
        setCurrEditedCell(cell.value);
    };

    const [currEditedCell, setCurrEditedCell] = useState("");
    const editCellValue = (value: string) => {
        if (value.length > 1 || !machine.alphabet.includes(value)) {
            return false;
        }
        setCurrEditedCell(value);
    };

    const saveCellValue = (cell: cellForChange) => {
        machine.editCellValue(cell.value);
        machine.editCell(10000000);
    };

    return (
        <div className={css.machine}>
            <div className={css.machine__panel}>
                <div className={css.panelTitle}>
                    <h1>Панель управления</h1>
                </div>
                <div className={css.panel}>
                    <div className={css.panel__el}>
                        <button className={css.panel__button} onClick={makeOneStep}>
                            Сделать шаг
                        </button>
                        <button
                            className={css.panel__button}
                            onClick={() => {
                                handleStartStopMachine();
                            }}
                        >
                            {currentMachineStatus ? <> Остановить</> : <> Запустить</>}
                        </button>
                    </div>
                    <div className={css.panel__el}>
                        <button className={css.panel__button} onClick={() => resetMachine()}>
                            Сбросить настройки
                        </button>
                    </div>
                </div>
            </div>
            <div className={css.machine__body}>
                <div className={css.tape}>
                    <div className={css.tape__left} onClick={() => machine.changeCurrentCells("L")}>
                        Налево
                    </div>
                    <div className={css.tape__cells}>
                        {machine.currentCells.map((cell) => {
                            return (
                                <>
                                    {cell.id === machine.currentCell ? (
                                        <div
                                            className={css.currCell}
                                            key={cell.id}
                                            onDoubleClick={() => editCell({ id: cell.id, value: cell.value })}
                                        >
                                            {machine.currEditedCell === cell.id ? (
                                                <input
                                                    className={css.inputEditCell}
                                                    type={"text"}
                                                    onChange={(e) => editCellValue(e.target.value)}
                                                    value={currEditedCell}
                                                    onBlur={(e) =>
                                                        saveCellValue({
                                                            id: machine.currEditedCell,
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
                                            {machine.currEditedCell === cell.id ? (
                                                <input
                                                    className={css.inputEditCell}
                                                    type={"text"}
                                                    onChange={(e) => editCellValue(e.target.value)}
                                                    value={currEditedCell}
                                                    onBlur={(e) =>
                                                        saveCellValue({
                                                            id: machine.currEditedCell,
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
                    <div className={css.tape__right} onClick={() => machine.changeCurrentCells("R")}>
                        Направо
                    </div>
                </div>

                {/* Текущее состояние */}
                <div className={css.currentState}>{machine.currentState}</div>

                {/* Алфавит */}
                <Alphabet initialInput={machine.alphabet} />

                {/* Таблица состояний */}
                <TableOfStates />
            </div>
        </div>
    );
});

export default TuringMachine;
