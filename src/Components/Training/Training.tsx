import { observer } from "mobx-react-lite";
import css from "./Training.module.css";
import { useEffect, useState } from "react";
import training from "../../store/training";
import TrainingTable from "../TrainingTable/TrainingTable";
import { useNavigate } from "react-router-dom";

const Training = observer(() => {
    useEffect(() => {
        restartTraining();
    }, []);
    const [currentPage, setCurrentPage] = useState(0);

    const restartTraining = () => {
        training.currentState = "";
        training.reset();
        setCurrentPage(0);
    };
    const navigate = useNavigate();
    const nextPage = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage === 16) {
            training.currentState = "q1";
        }
        if (currentPage === 24 || currentPage === 27) {
            training.makeStep();
        }
    };

    const buttonText = [
        "Начнём",
        "Далее",
        "Понятно",
        "Круто",
        "Ага",
        "Понял",
        "Дальше давай",
        "Ясненько",
        "Принял",
        "Да..",
        "Воу!",
        "Дальше давай",
        "Ясненько",
        "Принял",
        "Да..",
        "Воу!",
        "Далее",
        "Понятно",
        "Круто",
        "Ага",
        "Понял",
        "Понятно",
        "Круто",
        "Ага",
        "Понял",
        "Дальше давай",
        "Ясненько",
        "Принял",
        "Реально круто",
        "Надеюсь :)",
        "Пока!",
    ];

    const robotText = [
        "Привет! Я Колоblock! Cегодня я расскажу тебе как устроена машина Тьюринга!",
        "Первый важный компонент машины: БЕСКОНЕЧНАЯ ЛЕНТА. Представляешь, она бесконечна!",
        "Бесконечная лента поделена на клетки",
        "В каждой клетке в конкретный момент времени может быть записан ТОЛЬКО ОДИН символ..",
        "..или на записан вовсе!",
        "Символы не берутся из воздуха! В ячейке может быть записан только символ из..",
        "..АЛФАВИТА! Всё как у людей! Алфавит может состоять абсолютно из любых символов",
        "Однако, мы все знаем, что компьютеры используют двоичный код, поэтому..",
        "Пока будем работать с алфавитом, включающим только 1 и 0",
        "Теперь нам нужно как-то записывать и считывать символы с ленты..",
        "для этого нам нужна ГОЛОВКА СЧИТЫВАНИЯ-ЗАПИСИ",
        "В конкретный момент времени она направлена на конкретную ячейку",
        "Сама головка считывания-записи не знает что ей делать, ей нужна КОМАНДА..",
        "И эту команду она получает из ТАБЛИЦЫ ПЕРЕХОДОВ",
        "В конкретный момент времени машина находится в каком-то состоянии",
        "Например, сейчас она находится в состоянии q1 (состояние пишется под головкой считывания-записи)",
        "Чтобы понять, какое действие совершить, головка 'смотрит' на текущий символ (в данном случае 1)",
        "и на 'своё' состояние (сейчас q1) и обращается к таблице переходов",
        "Мы сопоставляем текущее состояние (q1) и текущий символ (1) и попадаем в ячейку с правилом",
        "В данном случае у нас есть правило перехода, т.к. ячейка не пуста",
        "Данное правило состоит из 3 частей:",
        "1: какой символ будет записан в ячейку ([ ] означает пустоту)",
        "2: в какую сторону сместится головка считывания-записи (L - влево, R - вправо, S - останется на месте)",
        "3: в какое состояние перейдёт (может остаться в том же состоянии)",
        "Итак, исходя из всех факторов сделаем ШАГ",
        "Вау! Первые шаги это всегда так мило (´• ω •`)",
        "Теперь мы попали на пустую клетку.. Смотрим в таблицу переходов - а там нет правила!",
        "В этом случае, когда мы сделаем шаг, машина не найдет правила и остановит свою работу",
        "Смотри, даже уведомление приходит, что машина прекратила работать!",
        "На этом всё! Надеюсь, что тебе стало понятно как работать с машиной Тьюринга!",
        "Не забывай про наш симулятор и обязательно потренируйся в практических заданиях!",
    ];

    return (
        <div className={css.training}>
            <div className={css.training__robot}>
                {currentPage < 31 ? (
                    <>
                        <div className={css.robot}>
                            <div className={css.robot__eyes}>
                                <div className={css.robot__eyes_el}></div>
                                <div className={css.robot__eyes_el}></div>
                            </div>
                        </div>
                        <div className={css.training__robot_text}>
                            <h1>{robotText[currentPage]}</h1>
                        </div>
                        <div>
                            <button onClick={() => nextPage()}>{buttonText[currentPage]}</button>
                        </div>
                    </>
                ) : (
                    <div className={css.end}>
                        <div className={css.end__el1} onClick={() => restartTraining()}>
                            Пройти обучение заново
                        </div>
                        <div className={css.end__el2} onClick={() => navigate("/turing-machine-simulator/app")}>
                            К симулятору
                        </div>
                        <div className={css.end__el3} onClick={() => navigate("/turing-machine-simulator/practice")}>
                            К практическим заданиям
                        </div>
                    </div>
                )}
            </div>
            <>
                {currentPage === 1 || currentPage === 2 ? (
                    <TrainingTape symbols={[]} />
                ) : currentPage === 3 || currentPage === 4 || currentPage === 5 ? (
                    <TrainingTape symbols={["0", "1"]} />
                ) : currentPage === 6 || currentPage === 7 ? (
                    <>
                        <TrainingTape symbols={["", "1", "п", "р", "и", "в", "е", "т", "и", "к", "3", "7", "★"]} />
                        <div className={css.center}>
                            <TrainingAlphabet alphabet={"all"} />
                        </div>
                    </>
                ) : currentPage === 8 || currentPage === 9 ? (
                    <>
                        <TrainingTape symbols={["0", "1"]} />
                        <div className={css.center}>
                            <TrainingAlphabet alphabet={"binary"} />
                        </div>
                    </>
                ) : currentPage === 10 ? (
                    <>
                        <TrainingTape symbols={["0", "1"]} />
                        <div className={css.center}>
                            <TrainingAlphabet alphabet={"binary"} />
                            <TrainingHead />
                        </div>
                    </>
                ) : currentPage === 11 || currentPage === 12 ? (
                    <>
                        {/* <TrainingTape symbols={["0", "1"]} /> */}
                        <TrainingTapeWithHead />
                        <div className={css.center}>
                            <TrainingAlphabet alphabet={"binary"} />
                        </div>
                    </>
                ) : currentPage >= 13 && currentPage <= 18 ? (
                    <>
                        {/* <TrainingTape symbols={["0", "1"]} /> */}
                        <TrainingTapeWithHead />
                        <div className={css.center}>
                            <TrainingAlphabet alphabet={"binary"} />
                            <TrainingTable isBlocked={true} isBorder={false} />
                        </div>
                    </>
                ) : currentPage >= 19 && currentPage <= 24 ? (
                    <>
                        {/* <TrainingTape symbols={["0", "1"]} /> */}
                        <TrainingTapeWithHead />
                        <div className={css.center}>
                            <TrainingAlphabet alphabet={"binary"} />
                            <TrainingTable isBlocked={true} isBorder={true} />
                        </div>
                    </>
                ) : currentPage >= 25 && currentPage <= 28 ? (
                    <>
                        {/* <TrainingTape symbols={["0", "1"]} /> */}
                        <TrainingTapeWithHead />
                        <div className={css.center}>
                            <TrainingAlphabet alphabet={"binary"} />
                            <TrainingTable isBlocked={true} isBorder={false} />
                        </div>
                    </>
                ) : currentPage >= 29 && currentPage <= 30 ? (
                    <>
                        <div className={css.center}></div>
                    </>
                ) : null}
            </>
        </div>
    );
});

interface PropsSymbols {
    symbols: string[];
}

export const TrainingTape: React.FC<PropsSymbols> = observer((symbols) => {
    return (
        <div className={css.training1}>
            <div className={css.tape}>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                {/* здесь переход */}
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[0]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[0]}</div>
                <div className={css.tape__el}>{symbols.symbols[1]}</div>
                <div className={css.tape__el}>{symbols.symbols[1]}</div>
                <div className={css.tape__el}>{symbols.symbols[0]}</div>
                <div className={css.tape__el}>{symbols.symbols[12]}</div>
                <div className={css.tape__el}>{symbols.symbols[1]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[2]}</div>
                <div className={css.tape__el}>{symbols.symbols[4]}</div>
                <div className={css.tape__el}>{symbols.symbols[7]}</div>
                <div className={css.tape__el}>{symbols.symbols[6]}</div>
                <div className={css.tape__el}>{symbols.symbols[3]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[12]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[0]}</div>
                <div className={css.tape__el}>{symbols.symbols[0]}</div>
                <div className={css.tape__el}>{symbols.symbols[12]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[0]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[12]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[1]}</div>
                <div className={css.tape__el}>{symbols.symbols[1]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[0]}</div>
                <div className={css.tape__el}>{symbols.symbols[1]}</div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}>{symbols.symbols[1]}</div>
                <div className={css.tape__el}>{symbols.symbols[10]}</div>
                <div className={css.tape__el}>{symbols.symbols[2]}</div>
                <div className={css.tape__el}>{symbols.symbols[3]}</div>
                <div className={css.tape__el}>{symbols.symbols[4]}</div>
                <div className={css.tape__el}>{symbols.symbols[5]}</div>
                <div className={css.tape__el}>{symbols.symbols[6]}</div>
                <div className={css.tape__el}>{symbols.symbols[7]}</div>
                <div className={css.tape__el}>{symbols.symbols[8]}</div>
                <div className={css.tape__el}>{symbols.symbols[9]}</div>
                <div className={css.tape__el}>{symbols.symbols[10]}</div>
                <div className={css.tape__el}>{symbols.symbols[11]}</div>
                <div className={css.tape__el}>{symbols.symbols[0]}</div>
                <div className={css.tape__el}></div>
                {/* Вот здесь переход */}
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
                <div className={css.tape__el}></div>
            </div>
        </div>
    );
});

interface PropsAlphabet {
    alphabet: string;
}
export const TrainingAlphabet: React.FC<PropsAlphabet> = observer(({ alphabet }) => {
    return (
        <div className={css.alphabet}>
            <div>Алфавит</div>
            <div>
                <input type="text" value={alphabet === "binary" ? "01" : "13приветик★"} />
            </div>
        </div>
    );
});

export const TrainingHead = observer(() => {
    return (
        <div className={css.head}>
            <div className={css.head__body}></div>
            <div className={css.head__text}>Головка считывания-записи</div>
        </div>
    );
});

interface cellForChange {
    id: number;
    value: string;
}

export const TrainingTapeWithHead = observer(() => {
    const editCell = (cell: cellForChange) => {
        training.editCell(cell.id);
        setCurrEditedCell(cell.value);
    };

    const [currEditedCell, setCurrEditedCell] = useState("");
    const editCellValue = (value: string) => {
        if (value.length > 1 || !training.alphabet.includes(value)) {
            return false;
        }
        setCurrEditedCell(value);
    };

    const saveCellValue = (cell: cellForChange) => {
        training.editCellValue(cell.value);
        training.editCell(10000000);
    };

    return (
        <>
            <div className={css.tapeWithHead}>
                <div className={css.tapeWithHead__cells}>
                    {training.currentCells.map((cell) => {
                        return (
                            <>
                                {cell.id === training.currentCell ? (
                                    <div className={css.currCell} key={cell.id}>
                                        {training.currEditedCell === cell.id ? (
                                            <input
                                                className={css.inputEditCell}
                                                type={"text"}
                                                onChange={(e) => editCellValue(e.target.value)}
                                                value={currEditedCell}
                                                onBlur={(e) =>
                                                    saveCellValue({
                                                        id: training.currEditedCell,
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
                                        {training.currEditedCell === cell.id ? (
                                            <input
                                                className={css.inputEditCell}
                                                type={"text"}
                                                onChange={(e) => editCellValue(e.target.value)}
                                                value={currEditedCell}
                                                onBlur={(e) =>
                                                    saveCellValue({
                                                        id: training.currEditedCell,
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
            <div className={css.currentState}>{training.currentState}</div>
        </>
    );
});

export default Training;
