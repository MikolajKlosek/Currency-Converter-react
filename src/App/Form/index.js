import React, { useState } from "react";
import { Result } from "./Result";
import {
    Button,
    Field,
    Header,
    Info,
    LabelText,
    Loading,
    Failure,
} from "./styled";

import { useRatesData } from "./useRatesData"

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.data[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit}>
            <Header>
                Przelicznik walut
            </Header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Proszę chwilę zaczekać... <br />Ładuję kursy walut z różnych instytucji finansowych
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Hmm... Coś poszło nie tak. Sprawdź, czy masz połączenie z internetem. Jeżeli tak, to wygląda na to, że problem leży po naszej stronie. Spróbuj ponownie za chwilę.
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <label>
                                    <LabelText>Kwota w PLN*:</LabelText>
                                    <Field
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        type="number"
                                        step="0.01"
                                        placeholder="Wpisz kwotę w zł"
                                        required
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <LabelText>Waluta:</LabelText>
                                    <Field
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {ratesData.currencies.map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </Field>
                                </label>
                            </p>
                            <p>
                                <Button>Przelicz!</Button>
                            </p>

                            <Info>
                                Kursy walut pobierane są z różnych instytucji finansowych. <br />
                            </Info>

                            <Result result={result} />
                        </>
                    )
                )}
        </form >
    );
};