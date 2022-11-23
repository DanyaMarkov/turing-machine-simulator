import { observer } from "mobx-react-lite";
import machine from "../../store/machine";
import css from "./TableOfStates.module.css";

const TableOfStates = observer(() => {
    const handleAddNewState = () => {
        machine.addState();
    };

    const handleRemoveState = (stateIndex: number) => {
        // console.log(stateIndex);
        machine.removeState(stateIndex);
    };

    return (
        <div>
            <h3>Таблица состояний</h3>
            <div className={css.table}>
                <table>
                    <tbody>
                        <tr className={css.tableHeader}>
                            <th> </th>
                            {machine.states.map((state, stateIndex) => {
                                return (
                                    <th
                                        key={state.name}
                                        className={css.tableHeader__el}
                                        onClick={() => handleRemoveState(stateIndex)}
                                    >
                                        {state.name}
                                    </th>
                                );
                            })}
                            <th className={css.tableHeader__addState}>
                                <button onClick={() => handleAddNewState()}>Добавить состояние</button>
                            </th>
                        </tr>

                        {machine.alphabetChars.map((char, indexChar) => {
                            return (
                                <tr>
                                    <td className={css.char}> {char} </td>
                                    {machine.states.map((state, indexState) => {
                                        // console.log("пробегаемся по стейту: " + JSON.stringify(state));
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
                                                        // console.log(e.target.value);
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

export default TableOfStates;
