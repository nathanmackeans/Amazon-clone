import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
            </p>
            <p>
              <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={$}
      />
    </div>
  );
}

export default Subtotal;
