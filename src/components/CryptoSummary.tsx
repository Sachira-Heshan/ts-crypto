import { Crypto } from "../Types";

export type AppProps = {
  crypto: Crypto;
};

function CryptoSummary({ crypto }: AppProps): JSX.Element {
  return (
    <>
      <div>
        <p>
          {crypto.name +
            " -> " +
            crypto.symbol +
            " -> $" +
            crypto.current_price}
        </p>
      </div>
    </>
  );
}

export default CryptoSummary;
