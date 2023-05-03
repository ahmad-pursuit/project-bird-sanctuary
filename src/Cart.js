import bonusItems from "./data/bonusItems";

export default function Cart({ cart, totalPrice, removeBird }) {

    let bonus = [];
    if (totalPrice >= 100) {
        bonus.push(bonusItems[0]);
    }
    if (totalPrice >= 300) {
        bonus.push(bonusItems[1])
    }
    if (totalPrice >= 500) {
        bonus.push(bonusItems[2]);
    }
    if (totalPrice >= 1000) {
        bonus.push(bonusItems[3])
    }


    let discount = "0%";
    if (cart.length >= 3) {
        totalPrice = (totalPrice / 100) * 90;
        discount = "10%";
    }

    return (
        <div className="Cart">
            <h1>Cart</h1>
            <h3>Discount: {discount}</h3>
            <h4>Total: ${totalPrice}</h4>
            <ol>
                {cart.map((bird, index) => {
                    return (
                        <li>
                            {bird.name}: ${bird.amount}
                            <button onClick={() => {
                                removeBird(bird, index);
                            }}>
                                Remove
                            </button>
                        </li>
                    );
                })}
            </ol>
            <p>Your donations has qualified for the following items</p>
            <ul>
                {bonus.map((a) => {
                    return <li id="prizes">{a}</li>;
                })}
            </ul>
        </div>
    );
}