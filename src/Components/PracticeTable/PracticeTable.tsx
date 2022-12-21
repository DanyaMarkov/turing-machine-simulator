import { observer } from "mobx-react-lite";
import machine from "../../store/machine";
import css from "./PracticeTable.module.css";

const PracticeTable = observer(() => {
    return (
        <div>
            <h3>Таблица переходов</h3>
            <div className={css.table}>
                <table>
                    <tbody>
                        <tr className={css.tableHeader}>
                            <th> </th>
                            {machine.states.map((state, stateIndex) => {
                                return (
                                    <th key={state.name} className={css.tableHeader__el}>
                                        {state.name}
                                    </th>
                                );
                            })}
                        </tr>

                        {machine.alphabetChars.map((char, indexChar) => {
                            return (
                                <tr>
                                    <td className={css.char}> {char} </td>
                                    {machine.states.map((state, indexState) => {
                                        return state.rules[indexChar]?.isVisible ? (
                                            <td key={indexChar} className={css.choose}>
                                                <select
                                                    name={"char"}
                                                    onChange={(e) => {
                                                        // console.log(e.target.value);
                                                        machine.changeState(state.name, char, "char", e.target.value);
                                                    }}
                                                >
                                                    {machine.alphabetChars.map((charEl) => {
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
                                                        machine.changeState(state.name, char, "action", e.target.value);
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
                                                        machine.changeState(state.name, char, "state", e.target.value);
                                                    }}
                                                >
                                                    {machine.states.map((stateEl) => {
                                                        return <option value={stateEl.name}>{stateEl.name}</option>;
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
                                            <>
                                                <td
                                                    className={css.addState}
                                                    onClick={() => (state.rules[indexChar].isVisible = true)}
                                                >
                                                    +
                                                </td>
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

export default PracticeTable;
