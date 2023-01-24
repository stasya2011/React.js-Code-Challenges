import { useEffect, useState } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

function ShoppingCart() {
  //   const cart = [{ name: "apple", quantity: 3, price: 0.39 }];
  const [food_basket, set_food_basket] = useState([]);
  const [total, setCheck] = useState(0);

  const addInList = (newCard) => {
    if (food_basket.findIndex((el) => el.name === newCard.name) !== -1) return;

    set_food_basket((food_basket) => {
      const t = [...food_basket];
      t.push(newCard);
      return t;
    });
  };

  const incTotal = (sum) => {
    console.log(sum);
    setCheck((total) => sum);
  };

  return (
    <div style={{ width: "70%", backgroundColor: "seagreen" }}>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <Item addInList={addInList} item={item} />
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {food_basket.map((item) => (
            <Card item={item} incTotal={incTotal} />
          ))}
        </div>
      </div>
      <div className="total">
        <h2>Total: ${total}</h2>
      </div>
    </div>
  );
}

const Item = ({ item, addInList }) => {
  return (
    <div
      key={item.name}
      style={{
        backgroundColor: "pink",
        padding: 16,
        margin: "16px 0",
        borderRadius: 10,
      }}
    >
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => addInList({ name: item.name, price: item.price })}>
        Add to Cart
      </button>
    </div>
  );
};

const Card = ({ item, incTotal }) => {
  const [card, setCard] = useState({ quantity: 1, sum: item.price });
  const [total, setTotal] = useState(item.price * card.quantity);

  useEffect(() => {
    setTotal(() => {
      return Math.round(card.quantity * item.price * 100) / 100;
    });

    incTotal(total);
  }, [card.quantity]);

  const inc = () =>
    setCard((card) => ({ ...card, quantity: card.quantity + 1 }));
  const dec = () =>
    setCard((card) => ({ ...card, quantity: card.quantity - 1 }));

  return (
    <div
      key={item.name}
      style={{
        backgroundColor: "salmon",
        padding: 10,
        margin: "16px 0",
        borderRadius: 10,
      }}
    >
      <h3>{item.name}</h3>
      <p>
        <button onClick={dec}>-</button>
        {card.quantity}
        <button onClick={inc}>+</button>
      </p>
      <p>Subtotal: ${total}</p>
    </div>
  );
};

export default ShoppingCart;
