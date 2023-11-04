import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "../Clock";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Przelicz walutę
                </legend>
                <Clock />
                <p>
                    <label>
                        <span className="form_labelText">Kwota w PLN*:
                        </span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__field"
                            type="number"
                            step="0.01"
                            placeholder="Wpisz kwotę w zł"
                            required
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form_labelText">
                            Waluta:
                        </span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
                <Result result={result} />
            </fieldset>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>

        </form>
    );
};