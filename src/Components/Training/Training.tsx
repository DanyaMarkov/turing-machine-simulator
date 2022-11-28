import { observer } from "mobx-react-lite";
import css from "./Training.module.css";
// import robot from "./../../assets/robot.png";
// import training from "../../store/training";
import { useState } from "react";

const Training = observer(() => {
    // const start = () => {
    //     training.handleChangePage();
    // };

    const [currentPage, setCurrentPage] = useState(0);

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
        "Воу!",
        "Воу!",
        "Воу!",
        "Воу!",
        "Воу!",
        "Воу!",
    ];
    const robotText = [
        "Привет! Я Колоblock! Cегодня я расскажу тебе как устроена машина Тьюринга!",
        "Первый важный компонент машины: БЕСКОНЕЧНАЯ ЛЕНТА. Представляешь, она бесконечна!",
        "Бесконечная лента поделена на клетки",
        "В каждой клетке в конкретный момент времени может быть записан ТОЛЬКО ОДИН символ..",
        "..или на записан вовсе!",
        "Символы не берутся из воздуха! В ячейке может быть записан только символ из..",
        // 6 "
        "..АЛФАВИТА! Всё как у людей! Алфавит может состоять абсолютно из любых символов",
        "Однако, мы все знаем, что компьютеры используют двоичный код, поэтому..",
        "Пока будем работать с алфавитом, включающим только 1 и 0",
        "Теперь нам нужно как-то записывать и считывать символы с ленты..",
        "для этого нам нужна ГОЛОВКА СЧИТЫВАНИЯ-ЗАПИСИ",
        "В конкретный момент времени она направлена на конкретную ячейку",
    ];

    return (
        <div className={css.training}>
            <div className={css.training__robot}>
                <div className={css.robot}>
                    <div className={css.robot__eyes}>
                        <div className={css.robot__eyes_el}></div>
                        <div className={css.robot__eyes_el}></div>
                    </div>
                    {/* <img src={robot} alt="робот" /> */}
                </div>
                <div className={css.training__robot_text}>
                    <h1>{robotText[currentPage]}</h1>
                </div>
                <div>
                    <button onClick={() => setCurrentPage(currentPage + 1)}>{buttonText[currentPage]}</button>
                </div>
            </div>
            <div className={css.training__content}>
                {currentPage === 1 || currentPage === 2 ? (
                    <TrainingTape symbols={[]} />
                ) : currentPage === 3 || currentPage === 4 || currentPage === 5 ? (
                    <TrainingTape symbols={["0", "1"]} />
                ) : currentPage === 6 || currentPage === 7 ? (
                    <>
                        <TrainingTape symbols={["", "1", "п", "р", "и", "в", "е", "т", "и", "к", "3", "7", "★"]} />
                        <TrainingAlphabet alphabet={"all"} />
                    </>
                ) : currentPage === 8 || currentPage === 9 ? (
                    <>
                        <TrainingTape symbols={["0", "1"]} />
                        <TrainingAlphabet alphabet={"binary"} />
                    </>
                ) : currentPage === 10 ? (
                    <>
                        <TrainingTape symbols={["0", "1"]} />
                        <TrainingAlphabet alphabet={"binary"} />
                        <TrainingHead />
                    </>
                ) : currentPage === 11 ? (
                    <>
                        <TrainingTape symbols={["0", "1"]} />
                        <TrainingAlphabet alphabet={"binary"} />
                    </>
                ) : null}
            </div>
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
    return <div className={css.head}>11111111111111111111111111111111111</div>;
});

export default Training;
