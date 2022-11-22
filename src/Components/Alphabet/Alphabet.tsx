import { observer } from "mobx-react-lite";
import machine from "../../store/machine";
import css from "./Alphabet.module.css";
import { useFormik } from "formik";

interface PropTypes {
    initialInput: string;
}
const Alphabet: React.FC<PropTypes> = observer(({ initialInput }) => {
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
            return errors;
        },
    });

    if (machine.alphabetNeedUpdate) {
        formikSetAlphabet.values.alphabet = initialInput;
        machine.alphabetNeedUpdate = false;
    }
    // if (machine.alphabet !== formikSetAlphabet.values.alphabet) {
    //     formikSetAlphabet.values.alphabet = initialInput;
    // }

    return (
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
    );
});

export default Alphabet;
