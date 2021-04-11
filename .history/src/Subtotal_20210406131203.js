import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { StateProvider, useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{...basket.price + basket.price}</strong>
            </p>
            <p>
              <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </p>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
