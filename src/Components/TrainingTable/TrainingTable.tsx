import { observer } from "mobx-react-lite";
import training from "../../store/training";
import css from "./TrainingTable.module.css";

interface PropsTrainingTable {
    isBlocked: boolean;
    isBorder: boolean;
}
const TrainingTable: React.FC<PropsTrainingTable> = observer(({ isBlocked, isBorder }) => {
    return (
        <div>
            <h3>Таблица переходов</h3>
            <div className={css.table}>
                <table>
                    <tbody>
                        <tr className={css.tableHeader}>
                            <th> </th>
                            {training.states.map((state, stateIndex) => {
                                return (
                                    <th key={state.name} className={css.tableHeader__el}>
                                        {state.name}
                                    </th>
                                );
                            })}
                        </tr>

                        {training.alphabetChars.map((char, indexChar) => {
                            return (
                                <tr>
                                    <td className={css.char}> {char} </td>
                                    {training.states.map((state, indexState) => {
                                        // console.log("пробегаемся по стейту: " + JSON.stringify(state));
                                        return state.rules[indexChar]?.isVisible ? (
                                            <td
                                                key={indexChar}
                                                className={
                                                    isBorder && indexChar === 1 && state.name === "q1"
                                                        ? css.redBorder
                                                        : css.choose
                                                }
                                            >
                                                {isBlocked ? (
                                                    <>
                                                        <select name={"char"} disabled={true}>
                                                            {training.alphabetChars.map((charEl) => {
                                                                return (
                                                                    <option key={charEl} value={charEl}>
                                                                        {charEl}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>

                                                        {/* Выбор движения */}
                                                        <select name={"action"} disabled={true}>
                                                            <option value={"L"}>L</option>
                                                            <option value={"R"}>R</option>
                                                            <option value={"S"}>S</option>
                                                        </select>
                                                        {/* Выбор встречаемого символа */}
                                                        <select name={"state"} disabled={true}>
                                                            {training.states.map((stateEl) => {
                                                                return (
                                                                    <option value={stateEl.name}>{stateEl.name}</option>
                                                                );
                                                            })}
                                                        </select>
                                                    </>
                                                ) : (
                                                    <>
                                                        <select
                                                            name={"char"}
                                                            onChange={(e) => {
                                                                // console.log(e.target.value);
                                                                training.changeState(
                                                                    state.name,
                                                                    char,
                                                                    "char",
                                                                    e.target.value
                                                                );
                                                            }}
                                                        >
                                                            {training.alphabetChars.map((charEl) => {
                                                                return (
                                                                    <option key={charEl} value={charEl}>
                                                                        {charEl}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>

                                                        {/* Выбор движения */}
                                                        <select
                                                            name={"action"}
                                                            onChange={(e) => {
                                                                // console.log(e.target.value);
                                                                training.changeState(
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
                                                                training.changeState(
                                                                    state.name,
                                                                    char,
                                                                    "state",
                                                                    e.target.value
                                                                );
                                                            }}
                                                        >
                                                            {training.states.map((stateEl) => {
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
                                                    </>
                                                )}
                                            </td>
                                        ) : (
                                            <>
                                                {!isBlocked ? (
                                                    <td
                                                        className={css.addState}
                                                        onClick={() => (state.rules[indexChar].isVisible = true)}
                                                    >
                                                        +
                                                    </td>
                                                ) : (
                                                    <td className={css.addState}></td>
                                                )}
                                            </>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
});

export default TrainingTable;
