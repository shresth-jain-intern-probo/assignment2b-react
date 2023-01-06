import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.itemPrice * c.qty, 0);
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {console.log("cartItems is ", cartItems)}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.itemName}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.itemPrice.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            {/* <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div> */}
          </>
        )}
      </div>
    </aside>
  );
}
