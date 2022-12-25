import { Crypto } from "../Types";
import { useState, useEffect } from "react";

export type AppProps = {
  crypto: Crypto;
  updateOwned: (crypto: Crypto, amount: number) => void;
};

function CryptoSummary({ crypto, updateOwned }: AppProps): JSX.Element {
  const [amount, setAmount] = useState<number>(NaN);

  useEffect(() => {
    console.log(crypto.name, amount, crypto.current_price * amount);
  });
  return (
    <>
      <div>
        <span>
          {crypto.name +
            " -> " +
            crypto.symbol +
            " -> $" +
            crypto.current_price}
        </span>
        <input
          type="number"
          style={{ margin: 10 }}
          value={amount}
          onChange={(e) => {
            setAmount(parseFloat(e.target.value));
            updateOwned(crypto, parseFloat(e.target.value));
          }}
        />
        <p>
          $
          {amount
            ? (crypto.current_price * amount).toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })
            : 0}
        </p>
      </div>
    </>
  );
}

export default CryptoSummary;
