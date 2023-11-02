
function App() {
  return (
    <main className="container">
      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Przelicz walutę
          </legend>
          <p>
            <label>
              <span className="form_labelText">Kwota w PLN*:
              </span>
              <input className="form__field" type="number" step="0.01" name="kwotaPLN" min="0.01" required />
            </label>
          </p>
          <p>
            <label>
              <span className="form_labelText">Waluta:
              </span>
              <select className="form__field" name="innaWaluta">
                <option value="EUR">Euro</option>
                <option value="USD">Dolar Amerykański</option>
                <option value="AED">Dirham Zjednoczonych Emiratów Arabskich</option>
                <option value="NOK">Korona Norweska</option>
              </select>
            </label>
          </p>
          <p>Kwota wynosi: <strong></strong></p>
        </fieldset>
        <p>
          <button className="form__button" type="submit">Przelicz!</button>
        </p>
      </form>
    </main>
  );
}

export default App;
