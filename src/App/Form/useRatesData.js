import { useEffect, useState } from "react"


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_jejHD0wJsHZKoXywsUvI1UHioKBEwCgntK4yr4ba");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { meta, data } = await response.json();
                const currencies = Object.keys(data);

                setRatesData({
                    state: "success",
                    meta,
                    data,
                    currencies,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData
};