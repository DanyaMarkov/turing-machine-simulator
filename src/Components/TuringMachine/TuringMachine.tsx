import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import machine from "../../store/machine";
import css from "./TuringMachine.module.css";
// import arrowNext from "../../assets/arrowNext.png";

const TuringMachine = observer(() => {
    const formikSetAlphabet = useFormik({
        initialValues: {
            alphabet: machine.alphabet,
        },
        onSubmit: (values) => {
            // machine.setAlphabet(values.alphabet);
            values.alphabet = machine.setAlphabet(values.alphabet);
        },

        validate: (values) => {
            let errors = {};

            // function charCheck(str: string) {
            //     for (let i = 0; i < str.length; i++) {
            //         if (str.split(str[i]).length - 1 > 1) {
            //             return true;
            //         }
            //     }
            //     return false;
            // }
            // if (charCheck(values.alphabet)) {
            //     // alert("все символы в алфавите должны быть уникальными!");
            //     errors.alphabet = "Все символы в алфавите должны быть уникальными!";
            // }

            return errors;
        },
    });

    const makeOneStep = () => {
        return machine.makeStep();
    };

    const [currentMachineStatus, setMachineStatus] = useState(0);

    const handleClick = () => {
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

    // const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

    return (
        <div className={css.machine}>
            <div className={css.machine__panel}>
                <div className={css.panelTitle}>
                    <h1>Панель управления</h1>
                </div>
                <div className={css.panel}>
                    <div className={css.panel__el} onClick={makeOneStep}>
                        <div>Сделать шаг</div>
                        {/* <div>
                            <img src={arrowNext} alt={"Сделать шаг стрелка"} />
                        </div> */}
                    </div>
                    <div
                        className={css.panel__el}
                        onClick={() => {
                            handleClick();
                            // machine.isMachineRunning ? launchOfMachine(true) : launchOfMachine(false);
                            // console.log(JSON.stringify(machine.states[0]));
                        }}
                    >
                        {currentMachineStatus ? <> Остановить</> : <> Запустить</>}
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
                                        <div className={css.currCell} key={cell.id}>
                                            {cell.value}
                                        </div>
                                    ) : (
                                        <div className={css.cell} key={cell.id}>
                                            {cell.value}
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
                <div className={css.alphabet}>
                    <div className={css.alphabet__title}>Введите допустимый алфавит</div>
                    <div>
                        <form className={css.alphabet__input} onSubmit={formikSetAlphabet.handleSubmit}>
                            <div className={css.alphabet__values}>
                                <input
                                    placeholder={"01"}
                                    id="alphabet"
                                    name="alphabet"
                                    type="text"
                                    autoComplete="alphabet"
                                    onChange={formikSetAlphabet.handleChange}
                                    onBlur={formikSetAlphabet.handleBlur}
                                    value={formikSetAlphabet.values.alphabet}
                                />
                            </div>
                            <div className={css.alphabet__confirm}>
                                <button onClick={formikSetAlphabet.submitForm}>Подтвердить</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <h3>Таблица состояний</h3>
                    <div className={css.table}>
                        <table>
                            <tbody>
                                <tr className={css.tableHeader}>
                                    <th> </th>
                                    {machine.states.map((state) => {
                                        return <th className={css.tableHeader}>{state.name}</th>;
                                    })}
                                </tr>

                                {machine.alphabetChars.map((char, indexChar) => {
                                    return (
                                        <tr>
                                            <td className={css.char}> {char} </td>
                                            {machine.states.map((state, indexState) => {
                                                return state.rules[indexChar].isVisible ? (
                                                    <td className={css.choose}>
                                                        <select
                                                            name={"char"}
                                                            onChange={(e) => {
                                                                console.log(e.target.value);
                                                                machine.changeState(
                                                                    state.name,
                                                                    char,
                                                                    "char",
                                                                    e.target.value
                                                                );
                                                            }}
                                                        >
                                                            {machine.alphabetChars.map((charEl) => {
                                                                return <option value={charEl}>{charEl}</option>;
                                                            })}
                                                        </select>

                                                        {/* Выбор движения */}
                                                        <select
                                                            name={"action"}
                                                            onChange={(e) => {
                                                                console.log(e.target.value);
                                                                machine.changeState(
                                                                    state.name,
                                                                    char,
                                                                    "action",
                                                                    e.target.value
                                                                );
                                                            }}
                                                        >
                                                            <option value={"L"}>L</option>
                                                            <option value={"R"}>R</option>
                                                            <option value={"S"}>S</option>
                                                        </select>
                                                        {/* Выбор встречаемого символа */}
                                                        <select
                                                            name={"state"}
                                                            onChange={(e) => {
                                                                console.log(e.target.value);
                                                                machine.changeState(
                                                                    state.name,
                                                                    char,
                                                                    "state",
                                                                    e.target.value
                                                                );
                                                            }}
                                                        >
                                                            {machine.states.map((stateEl) => {
                                                                return (
                                                                    <option value={stateEl.name}>{stateEl.name}</option>
                                                                );
                                                            })}
                                                        </select>
                                                        <div
                                                            className={css.deleteRule}
                                                            onClick={() => (state.rules[indexChar].isVisible = false)}
                                                        >
                                                            X
                                                        </div>
                                                    </td>
                                                ) : (
                                                    <td
                                                        className={css.addState}
                                                        onClick={() => (state.rules[indexChar].isVisible = true)}
                                                    >
                                                        +
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default TuringMachine;
