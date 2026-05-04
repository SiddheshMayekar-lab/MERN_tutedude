import { useState } from "react";
import "./App.css";

const shoes = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 5000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 7000,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400"
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 4500,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400"
  },
  {
    id: 4,
    name: "Nike Jordan",
    price: 9000,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"
  }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const existing = cart.find(item => item.id === shoe.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === shoe.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      
      {/* LEFT - SHOES */}
      <div className="left">
        <h2>Shoes</h2>
        {shoes.map(shoe => (
          <div key={shoe.id} className="card">
            <img src={shoe.image} alt={shoe.name}/>
            <h3>{shoe.name}</h3>
            <p>₹{shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT - CART */}
      <div className="right">
        <h2>Cart</h2>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>₹{item.price} x {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>
      </div>

    </div>
  );
}

export default App;